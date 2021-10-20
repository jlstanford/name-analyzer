
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
    'TheFool':{'Meaning':'a free spirit','Destiny':'You will remain true to yourself despite the obstacles you face.'},
    'TheMagician':{'Meaning':'resourcefulness','Destiny':'You will seek much help but doing so will bring you success.'},
    'TheHighPriestess':{'Meaning':'wisdom','Destiny':'You are divinely guided.'},
    'TheEmpress':{'Meaning':'nurturing','Destiny':'You will create success for yourself and for those around you.'},
    'TheEmperor':{'Meaning':'authority','Destiny':'You are in control of your own destiny.'},
    'TheHeirophant':{'Meaning':'tradition','Destiny':'You will find that sticking to the tried and true can be beneficial.'} ,
    'TheLovers':{'Meaning':'harmony','Destiny':'You will feel at home in a way that you haven\'t before'},
    'TheChariot':{'Meaning':'determination','Destiny':'You may struggle at first but you are always victorious in the end'},
    'Strength':{'Meaning':'courage','Destiny':'People will notice your deeds and you will finally recieve the praise you deserve.'},
    'TheHermit':{'Meaning':'peace','Destiny':'You are in harmony with all around you.'},
    'WheelofFortune':{'Meaning':'good luck','Destiny':'You can accomplish anything with a little effort'},
    'Justice':{'Meaning':'law','Destiny':'You know what you want and how to make it happen so what are you waiting for!'},
    'TheHangedMan':{'Meaning':'letting Go','Destiny':'Your story may wind through many paths but you will find happiness in the end.'},
    'Death':{'Meaning':'change','Destiny':'You will learn to set aside things that aren\'t serving you in order to truly thrive.'},
    'Temperance':{'Meaning':'balance','Destiny':'Your goals are aligned with your journey. Sit back and watch it unfold.'},
    'TheDevil':{'Meaning':'detachment','Destiny':'You may need to learn to let go in a situation.'},
    'TheTower':{'Meaning':'chaos','Destiny':'Life is moving fast; remember to count your blessings.'},
    'TheStar':{'Meaning':'hope','Destiny':'Your dreams are all coming true.'},
    'TheMoon':{'Meaning':'intuition','Destiny':'Everything may not be as it seems. You will need more clarity.'},
    'TheSun':{'Meaning':'success','Destiny':'You always see the beauty in the storm.'},
    'Judgement':{'Meaning':'absolution','Destiny':'You have a strong grasp of right and wrong.'},
    'TheWorld':{'Meaning':'accomplishment','Destiny':'You will encourage yourself and those around you to be their best toward the best possible outcome.'}
};

function getMeaning(arcanaName)
{
    return JSON.stringify(arcanaMeanings[(arcanaName.trim())]);
};

function getAllArcana()
{
    return JSON.stringify(majorArcana);
};
    
module.exports ={
    getAllArcana:getAllArcana,
    getMeaning: getMeaning
};