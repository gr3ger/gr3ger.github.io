Game.Win('Third-party');
if(ElderFrenzyBank === undefined) var ElderFrenzyBank = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
ElderFrenzyBank.name = 'Elder Frenzy Bank';
ElderFrenzyBank.version = '1.0';
ElderFrenzyBank.GameVersion = '2.031';

ElderFrenzyBank.launch = function(){
    ElderFrenzyBank.isLoaded = 1;
    Game.customStatsMenu.push(function(){
	CCSE.AppendStatsVersionNumber(ElderFrenzyBank.name, ElderFrenzyBank.version);
	CCSE.AppendStatsGeneral('<div class="listing"><b>Conjure Baked Goods worth now :</b> '+Beautify(Math.min(Game.cookiesPs * 60 * 30, Game.cookies * 0.15))+'</div>');
        CCSE.AppendStatsGeneral('<div class="listing"><b>Elder Frenzy + Conjure Baked Goods worth now :</b> '+Beautify(Math.min(Game.cookiesPsRaw * 60 * 30 * 777, Game.cookies * 0.15))+'</div>');	    
        CCSE.AppendStatsGeneral('<div class="listing"><b>Elder Frenzy + Conjure Baked Goods worth at max bank :</b> '+Beautify(Game.cookiesPsRaw * 60 * 30 * 777)+'</div>');
	CCSE.AppendStatsGeneral('<div class="listing"><b>Elder Frenzy + Conjure Baked Goods max bank needed :</b> '+Beautify((Game.cookiesPsRaw * 60 * 30 * 777) / 0.15)+'</div>');
      });
}

if(!ElderFrenzyBank.isLoaded){
	if(CCSE && CCSE.isLoaded){
		ElderFrenzyBank.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(ElderFrenzyBank.launch);
	}
}
