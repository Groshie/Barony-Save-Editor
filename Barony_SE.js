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
        [
            "asleep",
            "Asleep"
        ],
        [
            "poisoned",
            "Poisoned"
        ],
        [
            "stunned",
            "Stunned"
        ],
        [
            "confused",
            "Confused"
        ],
        [
            "drunk",
            "Drunk"
        ],
        [
            "invisible",
            "Invisible"
        ],
        [
            "blind",
            "Blind"
        ],
        [
            "greasy",
            "Greasy"
        ],
        [
            "messy",
            "Messy"
        ],
        [
            "fast",
            "Fast"
        ],
        [
            "paralyzed",
            "Paralyzed"
        ],
        [
            "levitating",
            "Levitating"
        ],
        [
            "telepath",
            "Telepath"
        ],
        [
            "vomiting",
            "Vomiting"
        ],
        [
            "bleeding",
            "Bleeding"
        ],
        [
            "slow",
            "Slow"
        ],
        [
            "magicresist",
            "Magicresist"
        ],
        [
            "magicreflect",
            "Magicreflect"
        ],
        [
            "vampiricaura",
            "Vampiricaura"
        ],
        [
            "shrinered buff",
            "Shrine red buff"
        ],
        [
            "shrinegreen buff",
            "Shrine green buff"
        ],
        [
            "shrineblue buff",
            "Shrine blue buff"
        ],
        [
            "hpregen",
            "Hp regen"
        ],
        [
            "mpregen",
            "Mp regen"
        ],
        [
            "pacify",
            "Pacify"
        ],
        [
            "polymorph",
            "Polymorph"
        ],
        [
            "knockback",
            "Knockback"
        ],
        [
            "withdrawal",
            "Withdrawal"
        ],
        [
            "potionstr",
            "Strength"
        ],
        [
            "shapeshift",
            "Shapeshift"
        ],
        [
            "webbed",
            "Webbed"
        ],
        [
            "fear",
            "Fear"
        ],
        [
            "magicamplify",
            "Magicamplify"
        ],
        [
            "disoriented",
            "Disoriented"
        ],
        [
            "shadowtagged",
            "Shadow tagged"
        ],
        [
            "trollsblood",
            "Trolls blood"
        ],
        [
            "flutter",
            "Flutter"
        ],
        [
            "dash",
            "Dash"
        ],
        [
            "distractedcooldown",
            "Distracted cooldown"
        ],
        [
            "mimiclocked",
            "Mimic locked"
        ],
        [
            "rooted",
            "Rooted"
        ],
        [
            "nauseaprotection",
            "Nausea protection"
        ],
        [
            "conbonus",
            "Con bonus"
        ],
        [
            "pwr",
            "Pwr"
        ],
        [
            "agility",
            "Agility"
        ],
        [
            "rally",
            "Rally"
        ],
        [
            "marigold",
            "Marigold"
        ],
        [
            "ensembleflute",
            "Ensemble flute"
        ],
        [
            "ensemblelyre",
            "Ensemble lyre"
        ],
        [
            "ensembledrum",
            "Ensemble drum"
        ],
        [
            "ensemblelute",
            "Ensemble lute"
        ],
        [
            "ensemblehorn",
            "Ensemble horn"
        ],
        [
            "lift",
            "Lift"
        ],
        [
            "guardspirit",
            "Guard spirit"
        ],
        [
            "guardbody",
            "Guard body"
        ],
        [
            "divineguard",
            "Divine guard"
        ],
        [
            "nimbleness",
            "Nimbleness"
        ],
        [
            "greatermight",
            "Greater might"
        ],
        [
            "counsel",
            "Counsel"
        ],
        [
            "sturdiness",
            "Sturdiness"
        ],
        [
            "blessfood",
            "Bless food"
        ],
        [
            "pinpoint",
            "Pinpoint"
        ],
        [
            "penance",
            "Penance"
        ],
        [
            "sacredpath",
            "Sacred path"
        ],
        [
            "detectenemy",
            "Detect enemy"
        ],
        [
            "bloodward",
            "Blood ward"
        ],
        [
            "trueblood",
            "True blood"
        ],
        [
            "divinezeal",
            "Divine zeal"
        ],
        [
            "maximise",
            "Maximise"
        ],
        [
            "minimise",
            "Minimise"
        ],
        [
            "weakness",
            "Weakness"
        ],
        [
            "incoherence",
            "Incoherence"
        ],
        [
            "overcharge",
            "Overcharge"
        ],
        [
            "envenomweapon",
            "Envenom weapon"
        ],
        [
            "magicgrease",
            "Magic grease"
        ],
        [
            "command",
            "Command"
        ],
        [
            "mimicvoid",
            "Mimic void"
        ],
        [
            "curseflesh",
            "Curse flesh"
        ],
        [
            "numbingbolt",
            "Numbing bolt"
        ],
        [
            "delaypain",
            "Delay pain"
        ],
        [
            "seekcreature",
            "Seek creature"
        ],
        [
            "taboo",
            "Taboo"
        ],
        [
            "courage",
            "Courage"
        ],
        [
            "cowardice",
            "Cowardice"
        ],
        [
            "spores",
            "Spores"
        ],
        [
            "abundance",
            "Abundance"
        ],
        [
            "greaterabundance",
            "Greater abundance"
        ],
        [
            "preserve",
            "Preserve"
        ],
        [
            "mistform",
            "Mist form"
        ],
        [
            "forceshield",
            "Force shield"
        ],
        [
            "lightenload",
            "Lighten load"
        ],
        [
            "attractitems",
            "Attract items"
        ],
        [
            "returnitem",
            "Return item"
        ],
        [
            "demesnedoor",
            "Demesne door"
        ],
        [
            "reflectorshield",
            "Reflector shield"
        ],
        [
            "dizzy",
            "Dizzy"
        ],
        [
            "spin",
            "Spin"
        ],
        [
            "criticalspell",
            "Critical spell"
        ],
        [
            "magicwell",
            "Magic well"
        ],
        [
            "static",
            "Static"
        ],
        [
            "absorbmagic",
            "Absorb magic"
        ],
        [
            "flamecloak",
            "Flame cloak"
        ],
        [
            "dusted",
            "Dusted"
        ],
        [
            "noisevisibility",
            "Noise visibility"
        ],
        [
            "rationspicy",
            "Ration spicy"
        ],
        [
            "rationsour",
            "Ration sour"
        ],
        [
            "rationbitter",
            "Ration bitter"
        ],
        [
            "rationhearty",
            "Ration hearty"
        ],
        [
            "rationherbal",
            "Ration herbal"
        ],
        [
            "rationsweet",
            "Ration sweet"
        ],
        [
            "growth",
            "Growth"
        ],
        [
            "thorns",
            "Thorns"
        ],
        [
            "bladevines",
            "Bladevines"
        ],
        [
            "bastionmushroom",
            "Bastion mushroom"
        ],
        [
            "bastionroots",
            "Bastion roots"
        ],
        [
            "focilight peace",
            "Foci light peace"
        ],
        [
            "focilight justice",
            "Foci light justice"
        ],
        [
            "focilight providence",
            "Foci light providence"
        ],
        [
            "focilight purity",
            "Foci light purity"
        ],
        [
            "focilight sanctuary",
            "Foci light sanctuary"
        ],
        [
            "stasis",
            "Stasis"
        ],
        [
            "hpmp regen",
            "Hp mp regen"
        ],
        [
            "disrupted",
            "Disrupted"
        ],
        [
            "frost",
            "Frost"
        ],
        [
            "magiciansarmor",
            "Magicians armor"
        ],
        [
            "projectspirit",
            "Project spirit"
        ],
        [
            "defyflesh",
            "Defy flesh"
        ],
        [
            "pinpointdamage",
            "Pinpoint damage"
        ],
        [
            "radiantheart",
            "Radiant heart"
        ],
        [
            "divinefire",
            "Divine fire"
        ],
        [
            "healingword",
            "Healing word"
        ],
        [
            "holyfire",
            "Holy fire"
        ],
        [
            "sigil",
            "Sigil"
        ],
        [
            "sanctuary",
            "Sanctuary"
        ],
        [
            "ducked",
            "Ducked"
        ]
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
        "Flames",
        "Ice wave",
        "Conjure food",
        "Guard body",
        "Guard spirit",
        "Divine guard",
        "Prof nimbleness",
        "Prof greater_might",
        "Prof counsel",
        "Prof sturdiness",
        "Bless food",
        "Pinpoint",
        "Donation",
        "Scry allies",
        "Scry shrines",
        "Scry traps",
        "Scry treasures",
        "Penance",
        "Call allies",
        "Sacred path",
        "Manifest destiny",
        "Detect enemy",
        "Detect enemies",
        "Turn undead",
        "Heal other",
        "Blood ward",
        "True blood",
        "Divine zeal",
        "Alter instrument",
        "Maximise",
        "Minimise",
        "Jump",
        "Incoherence",
        "Overcharge",
        "Envenom weapon",
        "Psychic spear",
        "Defy flesh",
        "Grease spray",
        "Blood waves",
        "Booby trap",
        "Compel",
        "Metallurgy",
        "Geomancy",
        "Forge key",
        "Forge jewel",
        "Enhance weapon",
        "Reshape weapon",
        "Alter arrow",
        "Void chest",
        "Puncture void",
        "Lead bolt",
        "Mercury bolt",
        "Numbing bolt",
        "Delay pain",
        "Curse flesh",
        "Revenant curse",
        "Cowardice",
        "Courage",
        "Seek ally",
        "Seek foe",
        "Deep shade",
        "Shade bolt",
        "Spirit weapon",
        "Adorcism",
        "Taboo",
        "Wonderlight",
        "Spores",
        "Spore bomb",
        "Windgate",
        "Vortex",
        "Telekinesis",
        "Kinetic push",
        "Disarm",
        "Strip",
        "Abundance",
        "Greater abundance",
        "Preserve",
        "Restore",
        "Sabotage",
        "Harvest trap",
        "Mist form",
        "Hologram",
        "Force shield",
        "Reflector",
        "Splinter Armor",
        "Lighten load",
        "Attract items",
        "Return items",
        "Absorb magic",
        "Seize magic",
        "Deface",
        "Sunder monument",
        "Demesne door",
        "Tunnel",
        "Null area",
        "Sphere silence",
        "Forge metal_scrap",
        "Forge magic_scrap",
        "Fire sprite",
        "Flame elemental",
        "Spin",
        "Dizzy",
        "Vandalise",
        "Desecrate",
        "Sanctify",
        "Sanctify water",
        "Cleanse food",
        "Adorcise instrument",
        "Flame cloak",
        "Critical spell",
        "Magic well",
        "Flame shield",
        "Lightning bolt",
        "Disrupt earth",
        "Earth spines",
        "Lightning nexus",
        "Fire wall",
        "Lift",
        "Slam",
        "Ignite",
        "Shatter objects",
        "Kinetic field",
        "Ice block",
        "Meteor Shower",
        "Chronomic field",
        "Eternals gaze",
        "Shatter earth",
        "Earth elemental",
        "Roots",
        "Mushroom",
        "Mycelium bomb",
        "Mycelium spores",
        "Heal pulse",
        "Shrub",
        "Thorns",
        "Bladevines",
        "Bastion mushroom",
        "Bastion roots",
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
        "Magicians armor",
        "Project spirit",
        "Breathe fire",
        "Heal minor",
        "Holy fire",
        "Sigil",
        "Sanctuary",
        "Holy beam"
    ];

    $scope.classes = [
        "Barbarian",
        "Warrior",
        "Healer",
        "Rogue",
        "Wanderer",
        "Cleric",
        "Merchant",
        "Wizard",
        "Arcanist",
        "Joker",
        "Sexton",
        "Ninja",
        "Monk",
        "Conjurer",
        "Accursed",
        "Mesmer",
        "Brewer",
        "Mechanist",
        "Punisher",
        "Shaman",
        "Hunter",
        "Bard",
        "Sapper",
        "Scion",
        "Hermit",
        "Paladin"
    ];

    $scope.races = [
        "Human",
        "Skeleton",
        "Vampire",
        "Succubus",
        "Goatman",
        "Automaton",
        "Incubus",
        "Goblin",
        "Insectoid",
        "Rat",
        "Troll",
        "Spider",
        "Imp",
        "Gnome",
        "Gremlin",
        "Dryad",
        "Myconid",
        "Salamander"
    ];

    $scope.types = [
        "nothing",
        "human",
        "rat",
        "goblin",
        "slime",
        "troll",
        "bat",
        "spider",
        "ghoul",
        "skeleton",
        "scorpion",
        "imp",
        "crab",
        "gnome",
        "demon",
        "succubus",
        "mimic",
        "lich",
        "minotaur",
        "devil",
        "shopkeeper",
        "kobold",
        "scarab",
        "crystalgolem",
        "incubus",
        "vampire",
        "shadow",
        "cockatrice",
        "insectoid",
        "goatman",
        "automaton",
        "lichice",
        "lichfire",
        "sentrybot",
        "spellbot",
        "gyrobot",
        "dummybot",
        "bugbear",
        "dryad",
        "myconid",
        "salamander",
        "gremlin",
        "revenant_skull",
        "minimimic",
        "monster_adorcised_weapon",
        "flame_elemental",
        "hologram",
        "moth",
        "earth_elemental",
        "duck_small",
        "monster_unused_6",
        "monster_unused_7",
        "monster_unused_8"
    ];

    $scope.sexes = [
        "Male",
        "Female"
    ];


    // Export as file
    $scope.export = function() {
        // Correctly set race and type flags
        for (let i=0;i<$scope.players.length;i++) {
            $scope.players[i].stats.type = $scope.types.indexOf($scope.races[$scope.players[i].race].toLowerCase());
            $scope.players[i].stats.MISC_FLAGS[4] = $scope.players[i].race;
        }
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
        } else {
            console.log("Spell " + currentSpell + " is already in the list of spells, and was not added again.");
        }
        return
    }

    $scope.removeSpell = function () {
        let thisSelect = document.getElementById(event.srcElement.id[0] + "_spell_select");
        let thisPlayer = angular.element(document.getElementById(event.srcElement.id)).scope().player;
        let spellList = angular.element(document.getElementById("barony-div")).scope().spells;
        let playerSpells = thisPlayer.spells;
        let currentSpell = thisSelect.value;
        let playerInventory = thisPlayer.stats.inventory;
        
        if (playerSpells.includes(spellList.indexOf(currentSpell))) {
            //Remove spell
            for (let i=0;i<playerInventory.length;i++) {
                if (playerInventory[i].type == 162 && playerInventory[i].appearance == spellList.indexOf(currentSpell)) {
                    if (thisPlayer.learned_spells.includes(playerInventory[i].appearance)) {
                        thisPlayer.learned_spells.splice(thisPlayer.learned_spells.indexOf(playerInventory[i].appearance), 1);
                    }
                    thisPlayer.spells.splice(thisPlayer.spells.indexOf(playerInventory[i].appearance), 1);
                    playerInventory.splice(i, 1);
                }
            }
            
            //Re-sort spell inventory
            let maxY = 0;
            let maxX = 0;
            for (let i=0;i<playerInventory.length;i++) {
                if (playerInventory[i].type == 162) {
                    playerInventory[i].x = maxX;
                    playerInventory[i].y = maxY;
                    maxX++;
                }

                if (maxX == 4) {
                    maxX = 0;
                    maxY++;
                }
            }
        } else {
            console.log("Spell " + currentSpell + " was not found in the list of spells.");
        }
        return
    }
    return
});