const Name = require('../../src/Name')
describe('Name API', () => {
    it("should return a meaning of beautiful for Linda", () => {
        let actualMeaningReturn = Name.getMeaning("Linda");
        let expectedMeaningReturn = "beautiful";
        expect( JSON.parse(actualMeaningReturn) ).toContain(expectedMeaningReturn);
    });
    it("should return 'Friendly' if name has double letters", () => {
        let actualMeaningReturn = Name.getMeaning("Jessica");
        let expectedMeaningReturn = "friendly";
        console.log(actualMeaningReturn);
        expect( JSON.parse(actualMeaningReturn) ).toContain(expectedMeaningReturn);
    });
})