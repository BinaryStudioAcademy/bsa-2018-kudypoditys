import formatNumber from 'client/helpers/formatNumber'

describe("validate", () => {
    it("should return proper string with thousand", () => {
        let testNumber = 1000,
            expected = '1,000';


        expect(formatNumber(testNumber)).toBe(expected);
    });


    it("should work properly with numeric types", () => {
        let testNumber = '1000',
            expected = '1,000';


        expect(formatNumber(testNumber)).toMatch(expected);
    });

    it("should return Argument is NaN in a case with non-numeric argument", () => {
        let testNumber = 'sad',
            expected = 'Argument is NaN';


        expect(formatNumber(testNumber)).toMatch(expected);
    });
    it("should return proper value in a case with negative number", () => {
        let testNumber = '-100',
            expected = '-100';


        expect(formatNumber(testNumber)).toEqual(expected);
    });
    it("should return proper value in a case with float", () => {
        let testNumber = 10.5,
            expected = '10.5';


        expect(formatNumber(testNumber)).toEqual(expected);
    })

});