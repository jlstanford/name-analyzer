const Arcana = require('../../src/Arcana')
describe('Arcana API', () => {
    it("should return a list of the 21 major arcana", () => {
        let actualArcanaReturn = Arcana.getAllArcana()
        let expectedArcanaReturn = [
            'The Fool',
            'The Magician',
            'The High Priestess',
            'The Empress',
            'The Emperor',
            'The Heirophant',
            'The Lovers',
            'The Chariot',
            'Strength',
            'The Hermit',
            'Wheel of Fortune',
            'Justice',
            'The Hanged Man',
            'Death',
            'Temperance',
            'The Devil',
            'The Tower',
            'The Star',
            'The Moon',
            'The Sun',
            'Judgement',
            'The World'
        ]
        expect( actualArcanaReturn ).toEqual(expectedArcanaReturn)
    })
    it("should return a meaning of determination for The Chariot", () => {
        let actualMeaningReturn = Arcana.getMeaning("TheChariot")
        let expectedMeaningReturn = "determination"
        expect( actualMeaningReturn["Meaning"] ).toEqual(expectedMeaningReturn)
    })
})