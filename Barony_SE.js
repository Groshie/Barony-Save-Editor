window.onload = () => {
    console.log("Barony Save Editor made by Groshie (2024)");
    return
};

const app = angular.module('Barony_SE', []);
app.controller('BaronyCtrl', function($scope) {
    $scope.load = function() {
        console.log("Started")
        let thisSave = document.getElementById("file-input").files[0];

        if (!thisSave) {
            console.log("No save file uploaded!");
            return
        }

        let fileReader = new FileReader();

        let thisJSON = {};
        
        fileReader.onload = function() {
            try {
                thisJSON = JSON.parse(fileReader.result);
                console.log("Valid save file.")
            } catch (error) {
                if (error) {
                    console.log("Not a valid save file!");
                    return
                } 
            }

            thisJSON.players[0].playerNum = 0;
            thisJSON.players[1].playerNum = 1;
            thisJSON.players[2].playerNum = 2;
            thisJSON.players[3].playerNum = 3;

            $scope.saveData = thisJSON;
            $scope.players = [thisJSON.players[0], thisJSON.players[1], thisJSON.players[2], thisJSON.players[3]];
            $scope.$apply();
        };

        fileReader.readAsText(thisSave);

        for (let i = 0; i < $scope.players; i++) {
            delete $scope.players[i].playerNum;
        }
        return
    };

    $scope.spells = [
        "None",
        "Forcebolt",
        "Magic Missile",
        "Cold",
        "Fireball",
        "Lightning",
        "Remove Curse",
        "Light",
        "Identify",
        "Magic Mapping",
        "Sleep",
        "Confuse",
        "Slow",
        "Opening",
        "Locking",
        "Levitation",
        "Invisibility",
        "Teleportation",
        "Healing",
        "Extra Healing",
        "Cure Ailment",
        "Dig",
        "Conjure Skeleton",
        "Stone Blood",
        "Bloodletting",
        "Dominate",
        "Reflect Magic",
        "Spray Acid",
        "Steal Weapon",
        "Drain Soul",
        "Vampiric Aura",
        "Charm Monster",
        "Revert Form",
        "Rat Form",
        "Arthropod Form",
        "Troll Form",
        "Imp Form",
        "Spray Web",
        "Poison",
        "Speed",
        "Fear",
        "Power Strike",
        "Detect Food",
        "Weakness",
        "Elemental Focus",
        "Arcane Mark",
        "Teleport Other",
        "Inner Demon",
        "Troll's Blood",
        "Salvage",
        "Flutter",
        "Dash",
        "Polymorph",
        "Crab Form",
        "Crab Web",
        "Ghost Bolt",
        "Slime Spray (Acid)",
        "Slime Spray (Water)",
        "Slime Spray (Magma)",
        "Slime Spray (Tar)",
        "Slime Spray (Metal)"
    ];

    $scope.export = function() {
        //console.log($scope.players);
        // Save new game information
        $scope.saveData.dungeon_lvl = parseInt(document.getElementById("dungeon-level").value);
        $scope.saveData.gamekey = parseInt(document.getElementById("game-seed").value);
        $scope.saveData.mapseed = parseInt(document.getElementById("map-seed").value);

        for (let i = 0; i < $scope.players.length; i++) {
            // Save new general stats
            $scope.saveData.players[i].stats.name = document.getElementById(i + "_name").value;
            $scope.saveData.players[i].stats.LVL = parseInt(document.getElementById(i + "_level").value);
            $scope.saveData.players[i].stats.EXP = parseInt(document.getElementById(i + "_exp").value);
            $scope.saveData.players[i].stats.GOLD = parseInt(document.getElementById(i + "_gold").value);
            $scope.saveData.players[i].stats.HUNGER = parseInt(document.getElementById(i + "_hunger").value);

            // Save new attributes
            $scope.saveData.players[i].stats.STR = parseInt(document.getElementById(i + "_str").value);
            $scope.saveData.players[i].stats.DEX = parseInt(document.getElementById(i + "_dex").value);
            $scope.saveData.players[i].stats.CON = parseInt(document.getElementById(i + "_con").value);
            $scope.saveData.players[i].stats.INT = parseInt(document.getElementById(i + "_int").value);
            $scope.saveData.players[i].stats.PER = parseInt(document.getElementById(i + "_per").value);
            $scope.saveData.players[i].stats.CHR = parseInt(document.getElementById(i + "_chr").value);
            $scope.saveData.players[i].stats.HP = parseInt(document.getElementById(i + "_hp").value);
            $scope.saveData.players[i].stats.maxHP = parseInt(document.getElementById(i + "_maxhp").value);
            $scope.saveData.players[i].stats.MP = parseInt(document.getElementById(i + "_mp").value);
            $scope.saveData.players[i].stats.maxMP = parseInt(document.getElementById(i + "_maxmp").value);

            // Save new proficiencies
            $scope.saveData.players[i].stats.PROFICIENCIES[4] = parseInt(document.getElementById(i + "_swimming").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[1] = parseInt(document.getElementById(i + "_stealth").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[13] = parseInt(document.getElementById(i + "_blocking").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[8] = parseInt(document.getElementById(i + "_ranged").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[14] = parseInt(document.getElementById(i + "_unarmed").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[9] = parseInt(document.getElementById(i + "_swords").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[12] = parseInt(document.getElementById(i + "_polearms").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[11] = parseInt(document.getElementById(i + "_axes").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[10] = parseInt(document.getElementById(i + "_maces").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[5] = parseInt(document.getElementById(i + "_leadership").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[2] = parseInt(document.getElementById(i + "_trading").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[3] = parseInt(document.getElementById(i + "_appraisal").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[0] = parseInt(document.getElementById(i + "_tinkering").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[15] = parseInt(document.getElementById(i + "_alchemy").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[7] = parseInt(document.getElementById(i + "_magic").value);
            $scope.saveData.players[i].stats.PROFICIENCIES[6] = parseInt(document.getElementById(i + "_casting").value);

            // Save new effects
            $scope.saveData.players[i].stats.EFFECTS[0] = document.getElementById(i + "_asleep_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[0] = parseInt(document.getElementById(i + "_asleep").value ? document.getElementById(i + "_asleep").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[1] = document.getElementById(i + "_poisoned_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[1] = parseInt(document.getElementById(i + "_poisoned").value ? document.getElementById(i + "_poisoned").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[2] = document.getElementById(i + "_stunned_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[2] = parseInt(document.getElementById(i + "_stunned").value ? document.getElementById(i + "_stunned").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[3] = document.getElementById(i + "_confused_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[3] = parseInt(document.getElementById(i + "_confused").value ? document.getElementById(i + "_confused").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[4] = document.getElementById(i + "_drunk_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[4] = parseInt(document.getElementById(i + "_drunk").value ? document.getElementById(i + "_drunk").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[5] = document.getElementById(i + "_invisible_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[5] = parseInt(document.getElementById(i + "_invisible").value ? document.getElementById(i + "_invisible").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[6] = document.getElementById(i + "_blind_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[6] = parseInt(document.getElementById(i + "_blind").value ? document.getElementById(i + "_blind").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[7] = document.getElementById(i + "_greasy_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[7] = parseInt(document.getElementById(i + "_greasy").value ? document.getElementById(i + "_greasy").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[8] = document.getElementById(i + "_messy_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[8] = parseInt(document.getElementById(i + "_messy").value ? document.getElementById(i + "_messy").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[9] = document.getElementById(i + "_fast_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[9] = parseInt(document.getElementById(i + "_fast").value ? document.getElementById(i + "_fast").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[10] = document.getElementById(i + "_paralyzed_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[10] = parseInt(document.getElementById(i + "_paralyzed").value ? document.getElementById(i + "_paralyzed").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[11] = document.getElementById(i + "_levitating_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[11] = parseInt(document.getElementById(i + "_levitating").value ? document.getElementById(i + "_levitating").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[12] = document.getElementById(i + "_telepath_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[12] = parseInt(document.getElementById(i + "_telepath").value ? document.getElementById(i + "_telepath").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[13] = document.getElementById(i + "_vomiting_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[13] = parseInt(document.getElementById(i + "_vomiting").value ? document.getElementById(i + "_vomiting").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[14] = document.getElementById(i + "_bleeding_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[14] = parseInt(document.getElementById(i + "_bleeding").value ? document.getElementById(i + "_bleeding").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[15] = document.getElementById(i + "_slow_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[15] = parseInt(document.getElementById(i + "_slow").value ? document.getElementById(i + "_slow").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[16] = document.getElementById(i + "_magicresist_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[16] = parseInt(document.getElementById(i + "_magicresist").value ? document.getElementById(i + "_magicresist").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[17] = document.getElementById(i + "_magicreflect_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[17] = parseInt(document.getElementById(i + "_magicreflect").value ? document.getElementById(i + "_magicreflect").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[18] = document.getElementById(i + "_vampiricaura_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[18] = parseInt(document.getElementById(i + "_vampiricaura").value ? document.getElementById(i + "_vampiricaura").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[19] = document.getElementById(i + "_redbuff_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[19] = parseInt(document.getElementById(i + "_redbuff").value ? document.getElementById(i + "_redbuff").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[20] = document.getElementById(i + "_greenbuff_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[20] = parseInt(document.getElementById(i + "_greenbuff").value ? document.getElementById(i + "_greenbuff").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[21] = document.getElementById(i + "_bluebuff_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[21] = parseInt(document.getElementById(i + "_bluebuff").value ? document.getElementById(i + "_bluebuff").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[22] = document.getElementById(i + "_hpregen_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[22] = parseInt(document.getElementById(i + "_hpregen").value ? document.getElementById(i + "_hpregen").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[23] = document.getElementById(i + "_mpregen_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[23] = parseInt(document.getElementById(i + "_mpregen").value ? document.getElementById(i + "_mpregen").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[24] = document.getElementById(i + "_pacified_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[24] = parseInt(document.getElementById(i + "_pacified").value ? document.getElementById(i + "_pacified").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[25] = document.getElementById(i + "_polymorphed_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[25] = parseInt(document.getElementById(i + "_polymorphed").value ? document.getElementById(i + "_polymorphed").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[26] = document.getElementById(i + "_knockback_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[26] = parseInt(document.getElementById(i + "_knockback").value ? document.getElementById(i + "_knockback").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[27] = document.getElementById(i + "_hungover_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[27] = parseInt(document.getElementById(i + "_hungover").value ? document.getElementById(i + "_hungover").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[28] = document.getElementById(i + "_strength_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[28] = parseInt(document.getElementById(i + "_strength").value ? document.getElementById(i + "_strength").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[29] = document.getElementById(i + "_shapeshift_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[29] = parseInt(document.getElementById(i + "_shapeshift").value ? document.getElementById(i + "_shapeshift").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[30] = document.getElementById(i + "_webbed_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[30] = parseInt(document.getElementById(i + "_webbed").value ? document.getElementById(i + "_webbed").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[31] = document.getElementById(i + "_fear_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[31] = parseInt(document.getElementById(i + "_fear").value ? document.getElementById(i + "_fear").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[32] = document.getElementById(i + "_elementalfocus_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[32] = parseInt(document.getElementById(i + "_elementalfocus").value ? document.getElementById(i + "_elementalfocus").value : 0); 
            $scope.saveData.players[i].stats.EFFECTS[33] = document.getElementById(i + "_disoriented_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[33] = parseInt(document.getElementById(i + "_disoriented").value ? document.getElementById(i + "_disoriented").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[34] = document.getElementById(i + "_arcanemarked_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[34] = parseInt(document.getElementById(i + "_arcanemarked").value ? document.getElementById(i + "_arcanemarked").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[35] = document.getElementById(i + "_trollsblood_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[35] = parseInt(document.getElementById(i + "_trollsblood").value ? document.getElementById(i + "_trollsblood").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[36] = document.getElementById(i + "_flutter_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[36] = parseInt(document.getElementById(i + "_flutter").value ? document.getElementById(i + "_flutter").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[37] = document.getElementById(i + "_dash_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[37] = parseInt(document.getElementById(i + "_dash").value ? document.getElementById(i + "_dash").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[38] = document.getElementById(i + "_distracted_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[38] = parseInt(document.getElementById(i + "_distracted").value ? document.getElementById(i + "_distracted").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[39] = document.getElementById(i + "_mimiclocked_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[39] = parseInt(document.getElementById(i + "_mimiclocked").value ? document.getElementById(i + "_mimiclocked").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[40] = document.getElementById(i + "_rooted_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[40] = parseInt(document.getElementById(i + "_rooted").value ? document.getElementById(i + "_rooted").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[41] = document.getElementById(i + "_nauseaprotection_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[41] = parseInt(document.getElementById(i + "_nauseaprotection").value ? document.getElementById(i + "_nauseaprotection").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[42] = document.getElementById(i + "_stamina_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[42] = parseInt(document.getElementById(i + "_stamina").value ? document.getElementById(i + "_stamina").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[43] = document.getElementById(i + "_mentality_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[43] = parseInt(document.getElementById(i + "_mentality").value ? document.getElementById(i + "_mentality").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[44] = document.getElementById(i + "_agility_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[44] = parseInt(document.getElementById(i + "_agility").value ? document.getElementById(i + "_agility").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[45] = document.getElementById(i + "_rally_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[45] = parseInt(document.getElementById(i + "_rally").value ? document.getElementById(i + "_rally").value : 0);
            $scope.saveData.players[i].stats.EFFECTS[46] = document.getElementById(i + "_marigoldhealing_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[46] = parseInt(document.getElementById(i + "_marigoldhealing").value ? document.getElementById(i + "_marigoldhealing").value : 0);

            //console.log($scope.saveData.players[i].spells);
            // Footnote: New spells should already be saved.
        }

        // Export as file
        console.log($scope.saveData);
        let thisDL = document.createElement("a");
        thisDL.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.saveData)));
        thisDL.download = document.getElementById("file-input").files[0].name;
        thisDL.click();
        thisDL.remove();
        return
    };

    // Add spell for player from select
    $scope.addSpell = function () {
        let thisSelect = document.getElementById(event.srcElement.id[0] + "_spell_select");
        let thisPlayer = angular.element(document.getElementById(event.srcElement.id)).scope().player;
        let spellList = angular.element(document.getElementById("barony-div")).scope().spells;
        let playerSpells = thisPlayer.spells;
        let currentSpell = thisSelect.value;
        let playerInventory = thisPlayer.stats.inventory;
        if (!playerSpells.includes(spellList.indexOf(currentSpell))) {
            // Adds the spell to the player spell list:
            angular.element(document.getElementById(event.srcElement.id)).scope().player.spells.push(spellList.indexOf(currentSpell));

            // Now we must also add the spell to the player spell inventory:
            let spellInventory = playerInventory.filter(spellFilter => spellFilter.type == 162);
            let maxY = Math.max(... spellInventory.map(y => parseInt(y["y"])));
            let maxX = Math.max(... spellInventory.filter(filter => filter["y"] == maxY).map(x => parseInt(x["x"])));
            let thisSpell = {
                "type": 162,
                "status": 3,
                "appearance": spellList.indexOf(currentSpell),
                "beatitude": 0,
                "count": 1,
                "identified": true,
                "x": maxX == 3 ? 0 : maxX + 1,
                "y": maxX == 3 ? maxY + 1 : maxY
            };
            playerInventory.push(thisSpell);
            console.log("Spell " + currentSpell + " added to player spell list!");
        } else {
            console.log("Spell " + currentSpell + " is already in the list, and was not added again.");
        }
        return
    }
    return
});