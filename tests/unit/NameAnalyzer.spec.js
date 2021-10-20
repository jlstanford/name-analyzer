const Analyzer = require('../../src/NameAnalyzer')
describe('Name Analyzer API', () => {
    it("should return an array of characteristics for 'Jessica'; 'Death' ", () => {
        let actualAnalysisReturn = Analyzer.analyze("Jessica","Death")
        expect( actualAnalysisReturn.length).toEqual(4)
    })
    it("should return an array of different statements based on characteristics for 'Jessica'; 'Death' ", () => {
        let actualAnalysisReturn = Analyzer.analyze("Jessica","Death")
        expect( actualAnalysisReturn[1] === actualAnalysisReturn[2] ).toBeFalsy()
        expect( actualAnalysisReturn[2] === actualAnalysisReturn[3] ).toBeFalsy()
        expect( actualAnalysisReturn[1] === actualAnalysisReturn[3] ).toBeFalsy()
    })
})