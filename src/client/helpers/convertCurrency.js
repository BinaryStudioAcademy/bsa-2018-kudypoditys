export const converterObj = {
    eur: {
        uah: 32.24,
        usd: 1.14
    },
    usd: {
        uah: 27.93,
        eur: 0.85
    },
    uah: {
        usd: 0.04,
        eur: 0.03
    }
};

function round(value, decimals = 2) {
    const pow10 = Math.pow(10, decimals);
    return Math.round(value * pow10) / pow10;
}

export function convert(currentCurrency, value, tagetCurrency) {
    const from = currentCurrency && currentCurrency.toLowerCase(),
        to = tagetCurrency && tagetCurrency.toLowerCase();

    if (from === to) return value;

    return converterObj[from] && converterObj[from][to] &&
        round(converterObj[from][to] * value) || value;
}