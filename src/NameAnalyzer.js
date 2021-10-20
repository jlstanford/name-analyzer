const nameObj = require('../src/Name')
const arcanaObj = require('../src/Arcana')
const statements = [
    "You are naturally",
    "You want to surround yourself with people who are",
    "You see yourself as",
    "Anyone around can see that you're"
]

var analysisKeywords = {}
/*analysis text structure
////1st line: "You strive for [arcana meaning]"
////2nd line: [random statement][random name characteristic]
////3rd line: [random statement][random name characteristic]
////4th line: [random statement][random name characteristic]
////5th line: [arcana destiny]
*/
function generateAnalysis({}){
    var analysisCharacteristics = arguments[0]
    var nameCharacteristics = analysisCharacteristics["Name"]
    var arcanaCharacteristics = analysisCharacteristics["Arcana"]
    var randomizeStatement = () => {
        return `${statements[Math.floor( Math.random()*statements.length )]} ${nameCharacteristics[Math.floor( Math.random()*nameCharacteristics.length )]}`
    }
    var analysisText = [
        `You strive for ${arcanaCharacteristics["Meaning"]} in this world.`
    ]
    while (analysisText.length<4){
        let randomStatement = randomizeStatement()
        if (!analysisText.find(statement => randomStatement === statement)){
            analysisText.push(randomStatement+".")
        }
    }
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
