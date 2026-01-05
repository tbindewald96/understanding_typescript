function process(value: unknown) {
    if (
        typeof value === 'object' && 
        !!value && 
        'log' in value && 
        typeof value.log === 'function'
    ) {
    value.log();
    } 
}

// Function that takes an unknown type parameter