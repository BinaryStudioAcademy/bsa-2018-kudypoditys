import {prettyNumbers} from 'client/helpers/prettyNumbers'

describe("validate", () => {
    it("should return proper string with thousand", () => {
        let testNumber = 1000,
            expected = '1,000';


        expect(prettyNumbers(testNumber)).toBe(expected);
    });


    it("should work properly with strings", () => {
        let testNumber = '1000',
            expected = '1,000';


        expect(prettyNumbers(testNumber)).toMatch(expected);
    })


});