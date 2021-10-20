nameMeanings = {
    'Linda':'beautiful',
    'Patricia':'noble',
    'Mary':'rebellious',
    'Robert':'bright',
    'John':'kind',
    'Michael':'godly',
    'James': 'a force of nature',
    'Jessica':'wealthy',
    'Ashley':'wise',
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
};
function getMeaning(name) {
    const endsInARegex = '[a-zA-Z]*[a][^a-zA-Z0-9]';
    const doubleLettersRegex = '[a]{2}|[b]{2}|[c]{2}|[d]{2}|[e]{2}|[f]{2}|[g]{2}|[h]{2}|[i]{2}|[j]{2}|[k]{2}|[l]{2}|[m]{2}|[n]{2}|[o]{2}|[p]{2}|[q]{2}|[r]{2}|[s]{2}|[t]{2}|[u]{2}|[v]{2}|[w]{2}|[x]{2}|[y]{2}|[z]{2}';
    var nameCharacteristics = [];
    var nameArray = name.split('');
    for(characterIdx in name.split(''))
    {
        nameCharacteristics.push(nameMeanings[nameArray[characterIdx].toUpperCase()]);
    }
    var doubleLetters = name.match(doubleLettersRegex);
    if(doubleLetters!=null)
    {
        nameCharacteristics.push( nameMeanings['doubleletters'] );
    }
    if(nameMeanings[name]!==undefined){
        nameCharacteristics.push( nameMeanings[name] );
    }
    return JSON.stringify(nameCharacteristics);
    
};
module.exports = {
    getMeaning: getMeaning
}
