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

    $scope.proficiencies = [
        "tinkering",
        "stealth",
        "trading",
        "lore",
        "thaumaturgy",
        "leadership",
        "mysticism",
        "sorcery",
        "ranged",
        "swords",
        "maces",
        "axes",
        "polearms",
        "blocking",
        "unarmed",
        "alchemy"
    ];

    $scope.statusEffects = [
        ["asleep", "Asleep"],
        ["poisoned", "Poisoned"],
        ["stunned", "Stunned"],
        ["confused", "Confused"],
        ["drunk", "Drunk"],
        ["invisible", "Invisible"],
        ["blind", "Blind"],
        ["greasy", "Greasy"],
        ["messy", "Messy"],
        ["fast", "Fast"],
        ["paralyzed", "Paralyzed"],
        ["levitating", "Levitating"],
        ["telepath", "Telepath"],
        ["vomiting", "Vomiting"],
        ["bleeding", "Bleeding"],
        ["slow", "Slow"],
        ["magicresist", "Mag. Resist"],
        ["magicreflect", "Mag. Reflect"],
        ["vampiricaura", "Vamp. Aura"],
        ["redbuff", "Red Shr. Buff"],
        ["greenbuff", "Green Shr. Buff"],
        ["bluebuff", "Blue Shr. Buff"],
        ["hpregen", "HP Regen"],
        ["mpregen", "MP Regen"],
        ["pacified", "Pacified"],
        ["polymorphed", "Polymorphed"],
        ["knockback", "Knockback"],
        ["hungover", "Hungover"],
        ["strength", "Strength"],
        ["shapeshift", "Shapeshift"],
        ["webbed", "Webbed"],
        ["fear", "Fear"],
        ["elementalfocus", "Elem. Focus"],
        ["disoriented", "Disoriented"],
        ["arcanemarked", "Arcane Marked"],
        ["trollsblood", "Troll's Blood"],
        ["flutter", "Flutter"],
        ["dash", "Dash"],
        ["distracted", "Distracted"],
        ["mimiclocked", "Mimic Lock."],
        ["rooted", "Rooted"],
        ["nauseaprotection", "Nausea Prot."],
        ["stamina", "Stamina"],
        ["mentality", "Mentality"],
        ["agility", "Agility"],
        ["rally", "Rally"],
        ["marigoldhealing", "Marigold Heal."]
    ];

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
        "Arthropod Form",
        "Spray Web",
        "Ghost Bolt",
        "Slime Spray (Acid)",
        "Slime Spray (Water)",
        "Slime Spray (Magma)",
        "Slime Spray (Tar)",
        "Slime Spray (Metal)",
        "Focus of Flames",
        "Focus of Snow",
        "Focus of Needles",
        "Focus of Arcs",
        "Focus of Sandblast",
        "Meteor",
        "SPELL_FLAMES",
        "SPELL_ICE_WAVE",
        "SPELL_CONJURE_FOOD",
        "SPELL_GUARD_BODY",
        "SPELL_GUARD_SPIRIT",
        "SPELL_DIVINE_GUARD",
        "SPELL_PROF_NIMBLENESS",
        "SPELL_PROF_GREATER_MIGHT",
        "SPELL_PROF_COUNSEL",
        "SPELL_PROF_STURDINESS",
        "SPELL_BLESS_FOOD",
        "SPELL_PINPOINT",
        "SPELL_DONATION",
        "SPELL_SCRY_ALLIES",
        "SPELL_SCRY_SHRINES",
        "SPELL_SCRY_TRAPS",
        "SPELL_SCRY_TREASURES",
        "SPELL_PENANCE",
        "SPELL_CALL_ALLIES",
        "SPELL_SACRED_PATH",
        "SPELL_MANIFEST_DESTINY",
        "SPELL_DETECT_ENEMY",
        "SPELL_DETECT_ENEMIES",
        "SPELL_TURN_UNDEAD",
        "SPELL_HEAL_OTHER",
        "SPELL_BLOOD_WARD",
        "SPELL_TRUE_BLOOD",
        "SPELL_DIVINE_ZEAL",
        "SPELL_ALTER_INSTRUMENT",
        "SPELL_MAXIMISE",
        "SPELL_MINIMISE",
        "SPELL_JUMP",
        "SPELL_INCOHERENCE",
        "SPELL_OVERCHARGE",
        "SPELL_ENVENOM_WEAPON",
        "SPELL_PSYCHIC_SPEAR",
        "SPELL_DEFY_FLESH",
        "SPELL_GREASE_SPRAY",
        "SPELL_BLOOD_WAVES",
        "SPELL_BOOBY_TRAP",
        "Compel",
        "SPELL_METALLURGY",
        "SPELL_GEOMANCY",
        "SPELL_FORGE_KEY",
        "SPELL_FORGE_JEWEL",
        "SPELL_ENHANCE_WEAPON",
        "SPELL_RESHAPE_WEAPON",
        "SPELL_ALTER_ARROW",
        "SPELL_VOID_CHEST",
        "SPELL_PUNCTURE_VOID",
        "SPELL_LEAD_BOLT",
        "SPELL_MERCURY_BOLT",
        "SPELL_NUMBING_BOLT",
        "SPELL_DELAY_PAIN",
        "SPELL_CURSE_FLESH",
        "SPELL_REVENANT_CURSE",
        "SPELL_COWARDICE",
        "SPELL_COURAGE",
        "SPELL_SEEK_ALLY",
        "SPELL_SEEK_FOE",
        "SPELL_DEEP_SHADE",
        "SPELL_SHADE_BOLT",
        "SPELL_SPIRIT_WEAPON",
        "SPELL_ADORCISM",
        "SPELL_TABOO",
        "SPELL_WONDERLIGHT",
        "SPELL_SPORES",
        "SPELL_SPORE_BOMB",
        "SPELL_WINDGATE",
        "SPELL_VORTEX",
        "SPELL_TELEKINESIS",
        "SPELL_KINETIC_PUSH",
        "SPELL_DISARM",
        "SPELL_STRIP",
        "SPELL_ABUNDANCE",
        "SPELL_GREATER_ABUNDANCE",
        "SPELL_PRESERVE",
        "SPELL_RESTORE",
        "SPELL_SABOTAGE",
        "SPELL_HARVEST_TRAP",
        "SPELL_MIST_FORM",
        "SPELL_HOLOGRAM",
        "SPELL_FORCE_SHIELD",
        "SPELL_REFLECTOR",
        "Splinter Armor",
        "SPELL_LIGHTEN_LOAD",
        "SPELL_ATTRACT_ITEMS",
        "SPELL_RETURN_ITEMS",
        "SPELL_ABSORB_MAGIC",
        "SPELL_SEIZE_MAGIC",
        "SPELL_DEFACE",
        "SPELL_SUNDER_MONUMENT",
        "SPELL_DEMESNE_DOOR",
        "SPELL_TUNNEL",
        "SPELL_NULL_AREA",
        "SPELL_SPHERE_SILENCE",
        "SPELL_FORGE_METAL_SCRAP",
        "SPELL_FORGE_MAGIC_SCRAP",
        "SPELL_FIRE_SPRITE",
        "SPELL_FLAME_ELEMENTAL",
        "SPELL_SPIN",
        "SPELL_DIZZY",
        "SPELL_VANDALISE",
        "SPELL_DESECRATE",
        "SPELL_SANCTIFY",
        "SPELL_SANCTIFY_WATER",
        "SPELL_CLEANSE_FOOD",
        "SPELL_ADORCISE_INSTRUMENT",
        "SPELL_FLAME_CLOAK",
        "SPELL_CRITICAL_SPELL",
        "SPELL_MAGIC_WELL",
        "SPELL_FLAME_SHIELD",
        "SPELL_LIGHTNING_BOLT",
        "SPELL_DISRUPT_EARTH",
        "SPELL_EARTH_SPINES",
        "SPELL_LIGHTNING_NEXUS",
        "SPELL_FIRE_WALL",
        "SPELL_LIFT",
        "SPELL_SLAM",
        "SPELL_IGNITE",
        "SPELL_SHATTER_OBJECTS",
        "SPELL_KINETIC_FIELD",
        "SPELL_ICE_BLOCK",
        "Meteor Shower",
        "SPELL_CHRONOMIC_FIELD",
        "SPELL_ETERNALS_GAZE",
        "SPELL_SHATTER_EARTH",
        "SPELL_EARTH_ELEMENTAL",
        "SPELL_ROOTS",
        "SPELL_MUSHROOM",
        "SPELL_MYCELIUM_BOMB",
        "SPELL_MYCELIUM_SPORES",
        "SPELL_HEAL_PULSE",
        "SPELL_SHRUB",
        "SPELL_THORNS",
        "SPELL_BLADEVINES",
        "SPELL_BASTION_MUSHROOM",
        "SPELL_BASTION_ROOTS",
        "Icon of Claim Life",
        "Icon of Void Rift",
        "Icon of Silence",
        "Icon of Vengeance",
        "Icon of Suppress",
        "Symbol of Peace",
        "Symbol of Justice",
        "Symbol of Providence",
        "Symbol of Purity",
        "Symbol of Sanctuary",
        "Scepter Blast",
        "SPELL_MAGICIANS_ARMOR",
        "SPELL_PROJECT_SPIRIT",
        "SPELL_BREATHE_FIRE",
        "SPELL_HEAL_MINOR",
        "SPELL_HOLY_FIRE",
        "SPELL_SIGIL",
        "SPELL_SANCTUARY",
        "SPELL_HOLY_BEAM"
    ];

    // Export as file
    $scope.export = function() {
        let thisDL = document.createElement("a");
        thisDL.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.saveData)));
        thisDL.download = document.getElementById("file-input").files[0].name;
        thisDL.click();
        thisDL.remove();
        return
    };

    // Add spell for player from select
    $scope.addSpell = function () {
        // Find out what player to set the spell to and which spell to add
        let thisSelect = document.getElementById(event.srcElement.id[0] + "_spell_select");
        let thisPlayer = angular.element(document.getElementById(event.srcElement.id)).scope().player;
        let spellList = angular.element(document.getElementById("barony-div")).scope().spells;
        let playerSpells = thisPlayer.spells;
        let currentSpell = thisSelect.value;
        let playerInventory = thisPlayer.stats.inventory;
        if (!playerSpells.includes(spellList.indexOf(currentSpell))) {
            // Adds the spell to the player spell list:
            angular.element(document.getElementById(event.srcElement.id)).scope().player.spells.push(spellList.indexOf(currentSpell));
            angular.element(document.getElementById(event.srcElement.id)).scope().player.learned_spells.push(spellList.indexOf(currentSpell));
            angular.element(document.getElementById(event.srcElement.id)).scope().player.learned_spells.sort();

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
            //console.log("Spell " + currentSpell + " added to player spell list!");
        } 
        //else {
        //    console.log("Spell " + currentSpell + " is already in the list, and was not added again.");
        //}
        return
    }
    return
});