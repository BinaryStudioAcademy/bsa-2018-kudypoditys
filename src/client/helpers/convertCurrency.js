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

const titleToCode = new Map();
titleToCode.set('EUR', '€');
titleToCode.set('USD', '$');
titleToCode.set('UAH', '₴');

function round(value, decimals = 2) {
    const pow10 = Math.pow(10, decimals);
    return Math.round(value * pow10) / pow10;
}

export function convert(currentCurrency, value, tagetCurrency) {

    if (!currentCurrency || !tagetCurrency || currentCurrency == tagetCurrency)
        return value;

    const from = codeToTitle.get(currentCurrency),
        to = codeToTitle.get(tagetCurrency)

    return converterObj[from] && converterObj[from][to] &&
        round(converterObj[from][to] * value) || value;
}

export default titleToCode;