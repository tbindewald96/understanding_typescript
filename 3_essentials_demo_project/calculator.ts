

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}; // define type for investment data

type InvestementResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number; 
}; // define type for investment result

type CalculationResult = InvestementResult[] | string; // define type for calculation result

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data; // destructure data object

    if (initialAmount < 0) {
        return 'Initial investment amount must be at least zero.'
    }
    if (duration <= 0) {
        return 'No valid amount of years provided.'
    }
    if (expectedReturn < 0) {
        return 'Expected return rate must be at least zero.'
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestementResult[] = []; // array to hold yearly results

    for (let i = 0; i < duration; i++) { // loop over each year
        total = total * (1 + expectedReturn); 
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({ // push yearly result to array
            year: `Year ${i + 1}`, //
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults
}


function printResults(results: CalculationResult) {
    if (typeof results === 'string') { // check if results is an error message
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('---------------------------');
    }
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};

const results = calculateInvestment(investmentData);

printResults(results)