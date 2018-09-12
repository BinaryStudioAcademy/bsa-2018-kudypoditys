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

export function convert(currentCurrency, value, tagetCurrency) {
    console.log(converterObj);
    return
    converterObj[currentCurrency] &&
        converterObj[currentCurrency][tagetCurrency] &&
        converterObj[currentCurrency][tagetCurrency] * value || 0;
}