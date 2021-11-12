Game.Win('Third-party');
if(ElderFrenzyBank === undefined) var ElderFrenzyBank = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
ElderFrenzyBank.name = 'Elder Frenzy Bank';
ElderFrenzyBank.version = '1.0';
ElderFrenzyBank.GameVersion = '2.031';

ElderFrenzyBank.launch = function(){
    console.log("Adding extra stats");
    Game.registerMod("ElderFrenzyBank", ElderFrenzyBank);
    Game.customStatsMenu.push(function(){
        console.log("Stats updated");
        CCSE.AppendStatsGeneral('<div>Bank needed: '+Beautify((Game.cookiesPsRaw * 60 * 30 * 777) / 0.15)+'</div>');
      });
}

if(CCSE && CCSE.isLoaded){
	ElderFrenzyBank.launch();
}
else{
	if(!CCSE) var CCSE = {};
	if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
	CCSE.postLoadHooks.push(ElderFrenzyBank.launch);
}
