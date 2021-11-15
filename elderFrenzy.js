Game.Win('Third-party');
if(ElderFrenzyBank === undefined) var ElderFrenzyBank = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
ElderFrenzyBank.name = 'Elder Frenzy Bank';
ElderFrenzyBank.version = '1.0';
ElderFrenzyBank.GameVersion = '2.031';

ElderFrenzyBank.launch = function(){
    ElderFrenzyBank.isLoaded = 1;
    Game.customStatsMenu.push(function(){
	    
	var rawCps30min = Game.cookiesPs * 60 * 30;
	CCSE.AppendStatsVersionNumber(ElderFrenzyBank.name, ElderFrenzyBank.version);
	CCSE.AppendStatsGeneral(`<div class="listing"><b>Conjure Baked Goods + current (de)buffs :</b> ${Beautify(Math.min(Game.cookiesPs * 60 * 30, Game.cookies * 0.15))}</div>`);
        CCSE.AppendStatsGeneral('<div class="listing"><b>Elder Frenzy + Conjure Baked Goods :</b> '+Beautify(Math.min(rawCps30min * 666, Game.cookies * 0.15))+'</div>');	    
        CCSE.AppendStatsGeneral('<div class="listing"><b>Elder Frenzy + Conjure Baked Goods at max bank :</b> '+Beautify(rawCps30min * 666)+'(Bank of '+Beautify((rawCps30min * 666) / 0.15)+' needed)</div>');
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
