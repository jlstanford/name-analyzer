const Analyzer = require('../../src/NameAnalyzer')
describe('Name Analyzer API', () => {
    it("should return an array of characteristics for 'Jessica'; 'Death' ", () => {
        let actualAnalysisReturn = Analyzer.analyze("Jessica","Death");
        console.table(actualAnalysisReturn.split(','));
        expect( actualAnalysisReturn.split(',').length).toEqual(5);
    });
    it("should return an array of different statements based on characteristics for 'Jessica'; 'Death' ", () => {
        let actualAnalysisReturn = Analyzer.analyze("Jessica","Death");
        expect( JSON.parse(actualAnalysisReturn)[1].trim() === JSON.parse(actualAnalysisReturn)[2].trim() ).toBeFalsy();
        expect( JSON.parse(actualAnalysisReturn)[2].trim() === JSON.parse(actualAnalysisReturn)[3].trim() ).toBeFalsy();
        expect( JSON.parse(actualAnalysisReturn)[1].trim() === JSON.parse(actualAnalysisReturn)[3].trim() ).toBeFalsy();
    });
});