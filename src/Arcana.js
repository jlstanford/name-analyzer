
majorArcana= [
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
];

arcanaMeanings = {
    'THEFOOL':{'Meaning':'a free spirit','Destiny':'You will remain true to yourself despite the obstacles you face.'},
    'THEMAGICIAN':{'Meaning':'resourcefulness','Destiny':'You will seek much help but doing so will bring you success.'},
    'THEHIGHPRIESTESS':{'Meaning':'wisdom','Destiny':'You are divinely guided.'},
    'THEEMPRESS':{'Meaning':'nurturing','Destiny':'You will create success for yourself and for those around you.'},
    'THEEMPEROR':{'Meaning':'authority','Destiny':'You are in control of your own destiny.'},
    'THEHEIROPHANT':{'Meaning':'tradition','Destiny':'You will find that sticking to the tried and true can be beneficial.'} ,
    'THELOVERS':{'Meaning':'harmony','Destiny':'You will feel at home in a way that you haven\'t before'},
    'THECHARIOT':{'Meaning':'determination','Destiny':'You may struggle at first but you are always victorious in the end'},
    'STRENGTH':{'Meaning':'courage','Destiny':'People will notice your deeds and you will finally recieve the praise you deserve.'},
    'THEHERMIT':{'Meaning':'peace','Destiny':'You are in harmony with all around you.'},
    'WHEELOFFORTUNE':{'Meaning':'good luck','Destiny':'You can accomplish anything with a little effort'},
    'JUSTICE':{'Meaning':'law','Destiny':'You know what you want and how to make it happen so what are you waiting for!'},
    'THEHANGEDMAN':{'Meaning':'letting Go','Destiny':'Your story may wind through many paths but you will find happiness in the end.'},
    'DEATH':{'Meaning':'change','Destiny':'You will learn to set aside things that aren\'t serving you in order to truly thrive.'},
    'TEMPERANCE':{'Meaning':'balance','Destiny':'Your goals are aligned with your journey. Sit back and watch it unfold.'},
    'THEDEVIL':{'Meaning':'detachment','Destiny':'You may need to learn to let go in a situation.'},
    'THETOWER':{'Meaning':'chaos','Destiny':'Life is moving fast; remember to count your blessings.'},
    'THESTAR':{'Meaning':'hope','Destiny':'Your dreams are all coming true.'},
    'THEMOON':{'Meaning':'intuition','Destiny':'Everything may not be as it seems. You will need more clarity.'},
    'THESUN':{'Meaning':'success','Destiny':'You always see the beauty in the storm.'},
    'JUDGEMENT':{'Meaning':'absolution','Destiny':'You have a strong grasp of right and wrong.'},
    'THEWORLD':{'Meaning':'accomplishment','Destiny':'You will encourage yourself and those around you to be their best toward the best possible outcome.'}
};

function getMeaning(arcanaName)
{
    return arcanaMeanings[(arcanaName.trim().toUpperCase())];
};

function getAllArcana()
{
    return majorArcana;
};
    
module.exports ={
    getAllArcana:getAllArcana,
    getMeaning: getMeaning
};