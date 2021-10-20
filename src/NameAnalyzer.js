const nameObj = require('../src/Name')
const arcanaObj = require('../src/Arcana')

var analysisKeywords = {}
/*analysis text structure
////1st line: "You strive for [arcana meaning]"
////2nd line: "You want to surround yourself with people who are[random name characteristic]"
////3rd line: "You see yourself as [random name characteristic]"
////4th line: [arcana destiny]
*/
function generateAnalysis({}){
    var analysisCharacteristics = arguments[0]
    var nameCharacteristics = analysisCharacteristics["Name"]
    var arcanaCharacteristics = analysisCharacteristics["Arcana"]
    var analysisText = [
        `You strive for ${arcanaCharacteristics["Meaning"]} in this world.`,
        `You want to surround yourself with people who are ${nameCharacteristics[0]}`,
        `You see yourself as ${nameCharacteristics[1]}`
    ]
    analysisText.push(`${arcanaCharacteristics["Destiny"]}`)
    return analysisText
}

module.exports = { 
    analyze: (name,arcana) => {
        analysisKeywords["Name"] = nameObj.getMeaning(name.toUpperCase())
        analysisKeywords["Arcana"] =  arcanaObj.getMeaning(arcana.toUpperCase() )
        return generateAnalysis(analysisKeywords,name,arcana)
    },
    generateAnalysis: generateAnalysis
}
