nameMeanings = {
    'LINDA':'beautiful',
    'PATRICIA':'noble',
    'MARY':'rebellious',
    'ROBERT':'bright',
    'JOHN':'kind',
    'MICHAEL':'godly',
    'JAMES': 'a force of nature',
    'JESSICA':'wealthy',
    'ASHLEY':'wise',
    'A':'resourceful',
    'B':'intuitive',
    'C':'nurturing',
    'D':'authoritative',
    'E':'traditional',
    'F':'curious',
    'G':'determined',
    'H':'heroic',
    'I':'introspective',
    'J':'lucky',
    'K':'fun-loving',
    'L':'strict',
    'M':'adaptable',
    'N':'patient',
    'O':'independent',
    'P':'chaotic',
    'Q':'creative',
    'R':'anxious',
    'S':'successful',
    'T':'divinely guided',
    'U':'motivated',
    'V':'winner',
    'W':'spiritual',
    'X':'unique',
    'Y':'amiable',
    'Z':'funky',
    '-endsInA':'frustrating',
    'doubleletters':'friendly'
}
function getMeaning(name) {
    const doubleLettersRegex = '[a]{2}|[b]{2}|[c]{2}|[d]{2}|[e]{2}|[f]{2}|[g]{2}|[h]{2}|[i]{2}|[j]{2}|[k]{2}|[l]{2}|[m]{2}|[n]{2}|[o]{2}|[p]{2}|[q]{2}|[r]{2}|[s]{2}|[t]{2}|[u]{2}|[v]{2}|[w]{2}|[x]{2}|[y]{2}|[z]{2}'
    var nameCharacteristics = []
    var nameArray = name.split('')
    for(characterIdx in name.split(''))
    {
        nameCharacteristics.push(nameMeanings[nameArray[characterIdx].toUpperCase()])
    }
    var doubleLetters = name.match(doubleLettersRegex)
    if(doubleLetters!=null)
    {
        nameCharacteristics.push( nameMeanings['doubleletters'] )
    }
    if(nameMeanings[name.toUpperCase()]!==undefined){
        nameCharacteristics.push( nameMeanings[name.toUpperCase()] )
    }
    return nameCharacteristics
}
module.exports = {
    getMeaning: getMeaning
}
