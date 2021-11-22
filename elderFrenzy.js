Game.Win('Third-party');
if (ElderFrenzyBank === undefined) var ElderFrenzyBank = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
ElderFrenzyBank.name = 'Elder Frenzy Bank';
ElderFrenzyBank.version = '1.0.1';
ElderFrenzyBank.GameVersion = '2.031';

ElderFrenzyBank.launch = function() {
    ElderFrenzyBank.isLoaded = 1;
    Game.customStatsMenu.push(function() {
        CCSE.AppendStatsVersionNumber(ElderFrenzyBank.name, ElderFrenzyBank.version);
    });

    Game.customMinigame["Wizard tower"].spellTooltip.push(function(id, str) {
        if (id === 0) {
            var rawCps30min = Game.cookiesPsRaw * 60 * 30;
            var gain = Math.min(Game.cookiesPs * 60 * 30, Game.cookies * 0.15);
            var maxGain = rawCps30min * 666;
            var maxBank = (rawCps30min * 666) / 0.15;

            return str.replace('</div></div>', `<div style=\"height:8px;\"></div>
	    <b>Current: </b> ${Beautify(gain)}
	    <div></div>
	    <b>Max (Elder Frenzy): </b> ${Beautify(maxGain)}
	    <div></div>
	    <b>Bank needed for max: </b> <span style=\"color:${Game.cookies < maxBank ? "#F00" : "#0F0"}\">${Beautify(maxBank)}</span>
	    </div></div>`);
        } else {
            return str;
        }
    })

    Game.customMinigame["Farm"].tileTooltip.push(function(col, row, text) {
        var plant = Game.Objects["Farm"].minigame.getTile(col, row)[0] - 1;
        return plantTooltip(plant, text);
    });
    Game.customMinigame["Farm"].seedTooltip.push(function(text, plant) {
        return plantTooltip(plant, text);
    });
}

function plantTooltip(plant, text) {
    switch (plant) {
        case 8:
            var bakeCpsRawCap = Game.cookiesPsRaw * 60 * 60;
            var bakeCpsCap = Game.cookiesPs * 60 * 60;

            var bakeGain = Math.min(bakeCpsCap, Game.cookies * 0.04);
            var bakeMaxGain = bakeCpsRawCap * 666;
            var bakeMaxBank = bakeMaxGain / 0.04;

            return text + `<div style=\"height:8px;\"></div>
		    <b>Current: </b> ${Beautify(bakeGain)}
		    <div></div>
		    <b>Max (Elder Frenzy): </b> ${Beautify(bakeMaxGain)}
		    <div></div>
		    <b>Bank needed for max: </b> <span style=\"color:${Game.cookies < bakeMaxBank ? "#F00" : "#0F0"}\">${Beautify(bakeMaxBank)}</span>
		    </div></div>`;
        case 20:
            var queenCpsRawCap = Game.cookiesPsRaw * 60 * 60;
            var queenCpsCap = Game.cookiesPs * 60 * 60;

            var queenGain = Math.min(queenCpsCap, Game.cookies * 0.04);
            var queenMaxGain = queenCpsRawCap * 666;
            var queenMaxBank = queenMaxGain / 0.04;

            return text + `<div style=\"height:8px;\"></div>
		    <b>Current: </b> ${Beautify(queenGain)}
		    <div></div>
		    <b>Max (Elder Frenzy): </b> ${Beautify(queenMaxGain)}
		    <div></div>
		    <b>Bank needed for max: </b> <span style=\"color:${Game.cookies < queenMaxBank ? "#F00" : "#0F0"}\">${Beautify(queenMaxBank)}</span>
		    </div></div>`;
        case 22:
            var dukeCpsRawCap = Game.cookiesPsRaw * 60 * 60 * 2;
            var dukeCpsCap = Game.cookiesPs * 60 * 60 * 2;

            var dukeGain = Math.min(dukeCpsCap, Game.cookies * 0.08);
            var dukeMaxGain = dukeCpsRawCap * 666;
            var dukeMaxBank = dukeMaxGain / 0.08;

            return text + `<div style=\"height:8px;\"></div>
		    <b>Current: </b> ${Beautify(dukeGain)}
		    <div></div>
		    <b>Max (Elder Frenzy): </b> ${Beautify(dukeMaxGain)}
		    <div></div>
		    <b>Bank needed for max: </b> <span style=\"color:${Game.cookies < dukeMaxBank ? "#F00" : "#0F0"}\">${Beautify(dukeMaxBank)}</span>
		    </div></div>`;
    }

    return text;
}

if (!ElderFrenzyBank.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        ElderFrenzyBank.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(ElderFrenzyBank.launch);
    }
}
