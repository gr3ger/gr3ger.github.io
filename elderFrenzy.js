Game.Win('Third-party');
if(ElderFrenzyBank === undefined) var ElderFrenzyBank = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
ElderFrenzyBank.name = 'Elder Frenzy Bank';
ElderFrenzyBank.version = '1.0.1';
ElderFrenzyBank.GameVersion = '2.031';

ElderFrenzyBank.launch = function(){
    ElderFrenzyBank.isLoaded = 1;
    Game.customStatsMenu.push(function(){	    
	CCSE.AppendStatsVersionNumber(ElderFrenzyBank.name, ElderFrenzyBank.version);
    });
	
    Game.customMinigame["Wizard tower"].spellTooltip.push(function(id, str){
	if(id === 0){
	    var rawCps30min = Game.cookiesPsRaw * 60 * 30;
	    var gain = Beautify(Math.min(Game.cookiesPs * 60 * 30, Game.cookies * 0.15));
	    var maxGain = Beautify(rawCps30min * 666);
	    var maxBank = Beautify((rawCps30min * 666) / 0.15);

	    return str.replace('</div></div>', `<div style=\"height:8px;\"></div>
	    <b>Current: </b> ${gain}
	    <div></div>
	    <b>Max (Elder Frenzy): </b> ${maxGain}
	    <div></div>
	    <b>Bank needed for max: </b> <span style=\"color:${Game.cookies < maxBank ? "#F00" : "#0F0"}\">${maxBank}</span>
	    </div></div>`);
	}
	else {
	    return str;
	}
    })
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
