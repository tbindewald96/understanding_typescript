

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
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults
}






function printResults() {

}

const results = calculateInvestment()

printResults(results)