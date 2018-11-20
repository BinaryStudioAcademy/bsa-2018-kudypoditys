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

export const codeToTitle = new Map();
codeToTitle.set('€', 'eur');
codeToTitle.set('$', 'usd');
codeToTitle.set('₴', 'uah');

export const titleToCode = new Map();
titleToCode.set('EUR', '€');
titleToCode.set('USD', '$');
titleToCode.set('UAH', '₴');

export const titleToLoverTitle = new Map();
titleToLoverTitle.set('EUR', 'eur');
titleToLoverTitle.set('USD', 'usd');
titleToLoverTitle.set('UAH', 'uah');

export function round(value, decimals = 2) {
    const pow10 = Math.pow(10, decimals);
    return Math.round(value * pow10) / pow10;
}

export function convertCurrencyByName(currentCurrency, value, targetCurrency) {
    if (!currentCurrency || !targetCurrency || currentCurrency === targetCurrency)
        return value;

    const from = titleToLoverTitle.get(currentCurrency),
        to = titleToLoverTitle.get(targetCurrency);

    return converterObj[from] && converterObj[from][to] && round(converterObj[from][to] * value) || value;
}

export function convert(currentCurrency, value, targetCurrency) {
    if (!currentCurrency || !targetCurrency || currentCurrency == targetCurrency)
        return value;

    const from = codeToTitle.get(currentCurrency),
        to = codeToTitle.get(targetCurrency);

    return converterObj[from] && converterObj[from][to] && round(converterObj[from][to] * value) || value;
}

export function getRatio(currentCurrency, targetCurrency, converterObj) {
    if (!currentCurrency || !targetCurrency || currentCurrency === targetCurrency)
        return 1;

    const from = titleToLoverTitle.get(currentCurrency),
        to = titleToLoverTitle.get(targetCurrency);

    return (converterObj[from] && converterObj[from][to]) ? converterObj[from][to] : 1;
}

// export default titleToCode;