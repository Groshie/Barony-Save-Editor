window.onload = () => {
    console.log("Barony Save Editor made by Groshie (2024)");
    return
};

const app = angular.module('Barony_SE', []);
app.controller('BaronyCtrl', function($scope) {
    $scope.newGame = {
        "magic_cookie": "BARONYJSONSAVE",
        "game_version": 501,
        "timestamp": "2026-01-01 00-00-00",
        "hash": 0,
        "game_name": "New Game",
        "gamekey": 0,
        "lobbykey": 0,
        "mapseed": 0,
        "gametimer": 100,
        "svflags": 146,
        "player_num": 0,
        "multiplayer_type": 0,
        "dungeon_lvl": 0,
        "level_track": 0,
        "customseed": 0,
        "customseed_string": "",
        "players_connected": [1, 0, 0, 0],
        "players": [{
            "char_class": 0,
            "race": 0,
            "kills": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "race": 0,
            "conduct_penniless": true,
            "conduct_foodless": true,
            "conduct_vegetarian": true,
            "conduct_illiterate": true,
            "additional_conducts": [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar": [1, 2, 8, 6, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295],
            "hotbar_alternate": [[4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295], [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295], [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295], [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295], [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295]],
            "selected_spell": 4294967295,
            "selected_spell_alternate": [4294967295, 4294967295, 4294967295, 4294967295, 4294967295],
            "selected_spell_last_appearance": -1,
            "spells": [],
            "recipes": [],
            "scrolls": [],
            "stats": {
                "name": "New Character",
                "type": 1,
                "sex": 0,
                "appearance": 0,
                "HP": 40,
                "maxHP": 40,
                "MP": 20,
                "maxMP": 20,
                "STR": 2,
                "DEX": 0,
                "CON": 1,
                "INT": -2,
                "PER": 0,
                "CHR": -1,
                "EXP": 0,
                "LVL": 1,
                "GOLD": 0,
                "HUNGER": 1000,
                "PROFICIENCIES": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 50, 0, 25, 20, 10],
                "EFFECTS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "EFFECTS_TIMERS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "EFFECTS_ACCRETION_TIME": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "MISC_FLAGS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "player_equipment": [{
                    "first": "helmet",
                    "second": 3
                }, {
                    "first": "breastplate",
                    "second": 4294967295
                }, {
                    "first": "gloves",
                    "second": 4294967295
                }, {
                    "first": "shoes",
                    "second": 4294967295
                }, {
                    "first": "shield",
                    "second": 2
                }, {
                    "first": "weapon",
                    "second": 1
                }, {
                    "first": "cloak",
                    "second": 4294967295
                }, {
                    "first": "amulet",
                    "second": 4294967295
                }, {
                    "first": "ring",
                    "second": 0
                }, {
                    "first": "mask",
                    "second": 4294967295
                }],
                "npc_equipment": [],
                "inventory": [{
                    "type": 96,
                    "status": 2,
                    "appearance": 0,
                    "beatitude": 0,
                    "count": 1,
                    "identified": true,
                    "x": -9999,
                    "y": -9999
                }, {
                    "type": 10,
                    "status": 3,
                    "appearance": 0,
                    "beatitude": 0,
                    "count": 1,
                    "identified": true,
                    "x": -9999,
                    "y": -9999
                }, {
                    "type": 0,
                    "status": 3,
                    "appearance": 1,
                    "beatitude": 0,
                    "count": 1,
                    "identified": true,
                    "x": -9999,
                    "y": -9999
                }, {
                    "type": 44,
                    "status": 2,
                    "appearance": 0,
                    "beatitude": 0,
                    "count": 1,
                    "identified": true,
                    "x": -9999,
                    "y": -9999
                }, {
                    "type": 154,
                    "status": 3,
                    "appearance": 0,
                    "beatitude": 0,
                    "count": 2,
                    "identified": true,
                    "x": 0,
                    "y": 1
                }, {
                    "type": 158,
                    "status": 3,
                    "appearance": 0,
                    "beatitude": 0,
                    "count": 1,
                    "identified": true,
                    "x": 0,
                    "y": 2
                }, {
                    "type": 148,
                    "status": 2,
                    "appearance": 0,
                    "beatitude": 0,
                    "count": 2,
                    "identified": true,
                    "x": 4,
                    "y": 1
                }, {
                    "type": 54,
                    "status": 4,
                    "appearance": 2,
                    "beatitude": 0,
                    "count": 1,
                    "identified": true,
                    "x": 0,
                    "y": 0
                }, {
                    "type": 191,
                    "status": 1,
                    "appearance": 1,
                    "beatitude": 0,
                    "count": 2,
                    "identified": true,
                    "x": 4,
                    "y": 0
                }],
                "void_chest_inventory": [],
                "attributes": [],
                "lootbags": []
            },
            "followers": [],
            "game_statistics": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "shopkeeper_hostility": [{
                "first": 1,
                "second": {
                    "wanted_level": 0,
                    "player_race": 1,
                    "equipment": 0,
                    "type": 1,
                    "sex": 1,
                    "player": 0,
                    "num_aggressions": 0,
                    "num_kills": 0,
                    "num_accessories": 0
                }
                }],
            "compendium_item_events": [{
                "first": "DISTANCE_MAX_RUN",
                "second": [3001, 472]
                }, {
                "first": "LEVELS_MAX_COMPLETION",
                "second": [2000, 751]
                }, {
                "first": "LEVELS_MIN_COMPLETION",
                "second": [2000, 751]
                }, {
                "first": "RUNS_COLLECTED",
                "second": [0, 1, 10, 1, 44, 1, 54, 1, 96, 1, 148, 1, 154, 1, 158, 1, 191, 1]
                }],
            "item_degrade_rng": [],
            "sustained_mp_used_sorcery": 0,
            "sustained_mp_used_mysticism": 0,
            "sustained_mp_used_thaumaturgy": 0,
            "base_mp_used_sorcery": 0,
            "base_mp_used_mysticism": 0,
            "base_mp_used_thaumaturgy": 0,
            "learned_spells": [],
            "ducks_in_a_row": [],
            "favorite_books_achievement": [],
            "sustained_spell_id_counters": [],
            "escalating_rng_rolls": [],
            "escalating_spell_rng_rolls": [],
            "appraisal_time_progress": []
            }, {
            "char_class": 0,
            "race": 0,
            "kills": [],
            "race": 0,
            "conduct_penniless": false,
            "conduct_foodless": false,
            "conduct_vegetarian": false,
            "conduct_illiterate": false,
            "additional_conducts": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar_alternate": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            "selected_spell": 0,
            "selected_spell_alternate": [0, 0, 0, 0, 0],
            "selected_spell_last_appearance": 0,
            "spells": [],
            "recipes": [],
            "scrolls": [],
            "stats": {
                "name": "",
                "type": 1,
                "sex": 0,
                "appearance": 0,
                "HP": 0,
                "maxHP": 0,
                "MP": 0,
                "maxMP": 0,
                "STR": 0,
                "DEX": 0,
                "CON": 0,
                "INT": 0,
                "PER": 0,
                "CHR": 0,
                "EXP": 0,
                "LVL": 0,
                "GOLD": 0,
                "HUNGER": 0,
                "PROFICIENCIES": [],
                "EFFECTS": [],
                "EFFECTS_TIMERS": [],
                "EFFECTS_ACCRETION_TIME": [],
                "MISC_FLAGS": [],
                "player_equipment": [],
                "npc_equipment": [],
                "inventory": [],
                "void_chest_inventory": [],
                "attributes": [],
                "lootbags": []
            },
            "followers": [],
            "game_statistics": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "shopkeeper_hostility": [],
            "compendium_item_events": [],
            "item_degrade_rng": [],
            "sustained_mp_used_sorcery": 0,
            "sustained_mp_used_mysticism": 0,
            "sustained_mp_used_thaumaturgy": 0,
            "base_mp_used_sorcery": 0,
            "base_mp_used_mysticism": 0,
            "base_mp_used_thaumaturgy": 0,
            "learned_spells": [],
            "ducks_in_a_row": [],
            "favorite_books_achievement": [],
            "sustained_spell_id_counters": [],
            "escalating_rng_rolls": [],
            "escalating_spell_rng_rolls": [],
            "appraisal_time_progress": []
            }, {
            "char_class": 0,
            "race": 0,
            "kills": [],
            "race": 0,
            "conduct_penniless": false,
            "conduct_foodless": false,
            "conduct_vegetarian": false,
            "conduct_illiterate": false,
            "additional_conducts": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar_alternate": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            "selected_spell": 0,
            "selected_spell_alternate": [0, 0, 0, 0, 0],
            "selected_spell_last_appearance": 0,
            "spells": [],
            "recipes": [],
            "scrolls": [],
            "stats": {
                "name": "",
                "type": 1,
                "sex": 0,
                "appearance": 0,
                "HP": 0,
                "maxHP": 0,
                "MP": 0,
                "maxMP": 0,
                "STR": 0,
                "DEX": 0,
                "CON": 0,
                "INT": 0,
                "PER": 0,
                "CHR": 0,
                "EXP": 0,
                "LVL": 0,
                "GOLD": 0,
                "HUNGER": 0,
                "PROFICIENCIES": [],
                "EFFECTS": [],
                "EFFECTS_TIMERS": [],
                "EFFECTS_ACCRETION_TIME": [],
                "MISC_FLAGS": [],
                "player_equipment": [],
                "npc_equipment": [],
                "inventory": [],
                "void_chest_inventory": [],
                "attributes": [],
                "lootbags": []
            },
            "followers": [],
            "game_statistics": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "shopkeeper_hostility": [],
            "compendium_item_events": [],
            "item_degrade_rng": [],
            "sustained_mp_used_sorcery": 0,
            "sustained_mp_used_mysticism": 0,
            "sustained_mp_used_thaumaturgy": 0,
            "base_mp_used_sorcery": 0,
            "base_mp_used_mysticism": 0,
            "base_mp_used_thaumaturgy": 0,
            "learned_spells": [],
            "ducks_in_a_row": [],
            "favorite_books_achievement": [],
            "sustained_spell_id_counters": [],
            "escalating_rng_rolls": [],
            "escalating_spell_rng_rolls": [],
            "appraisal_time_progress": []
            }, {
            "char_class": 0,
            "race": 0,
            "kills": [],
            "race": 0,
            "conduct_penniless": false,
            "conduct_foodless": false,
            "conduct_vegetarian": false,
            "conduct_illiterate": false,
            "additional_conducts": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "hotbar_alternate": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            "selected_spell": 0,
            "selected_spell_alternate": [0, 0, 0, 0, 0],
            "selected_spell_last_appearance": 0,
            "spells": [],
            "recipes": [],
            "scrolls": [],
            "stats": {
                "name": "",
                "type": 1,
                "sex": 0,
                "appearance": 0,
                "HP": 0,
                "maxHP": 0,
                "MP": 0,
                "maxMP": 0,
                "STR": 0,
                "DEX": 0,
                "CON": 0,
                "INT": 0,
                "PER": 0,
                "CHR": 0,
                "EXP": 0,
                "LVL": 0,
                "GOLD": 0,
                "HUNGER": 0,
                "PROFICIENCIES": [],
                "EFFECTS": [],
                "EFFECTS_TIMERS": [],
                "EFFECTS_ACCRETION_TIME": [],
                "MISC_FLAGS": [],
                "player_equipment": [],
                "npc_equipment": [],
                "inventory": [],
                "void_chest_inventory": [],
                "attributes": [],
                "lootbags": []
            },
            "followers": [],
            "game_statistics": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "shopkeeper_hostility": [],
            "compendium_item_events": [],
            "item_degrade_rng": [],
            "sustained_mp_used_sorcery": 0,
            "sustained_mp_used_mysticism": 0,
            "sustained_mp_used_thaumaturgy": 0,
            "base_mp_used_sorcery": 0,
            "base_mp_used_mysticism": 0,
            "base_mp_used_thaumaturgy": 0,
            "learned_spells": [],
            "ducks_in_a_row": [],
            "favorite_books_achievement": [],
            "sustained_spell_id_counters": [],
            "escalating_rng_rolls": [],
            "escalating_spell_rng_rolls": [],
            "appraisal_time_progress": []
            }],
        "additional_data": [],
        "map_messages": []
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

    $scope.spellsSorted = [... $scope.spells].sort();

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

    $scope.items = [
        "Wooden shield",
        "Quarterstaff",
        "Bronze sword",
        "Bronze mace",
        "Bronze axe",
        "Bronze shield",
        "Sling",
        "Iron spear",
        "Iron sword",
        "Iron mace",
        "Iron axe",
        "Iron shield",
        "Shortbow",
        "Steel halberd",
        "Steel sword",
        "Steel mace",
        "Steel axe",
        "Steel shield",
        "Steel shield resistance",
        "Crossbow",
        "Gloves",
        "Gloves dexterity",
        "Bracers",
        "Bracers constitution",
        "Gauntlets",
        "Gauntlets strength",
        "Cloak",
        "Cloak magicreflection",
        "Cloak invisibility",
        "Cloak protection",
        "Leather boots",
        "Leather boots speed",
        "Iron boots",
        "Iron boots waterwalking",
        "Steel boots",
        "Steel boots levitation",
        "Steel boots feather",
        "Leather breastpiece",
        "Iron breastpiece",
        "Steel breastpiece",
        "Hat phrygian",
        "Hat hood",
        "Hat wizard",
        "Hat jester",
        "Leather helm",
        "Iron helm",
        "Steel helm",
        "Amulet sexchange",
        "Amulet lifesaving",
        "Amulet waterbreathing",
        "Amulet magicreflection",
        "Amulet strangulation",
        "Amulet poisonresistance",
        "Potion water",
        "Potion booze",
        "Potion juice",
        "Potion sickness",
        "Potion confusion",
        "Potion extrahealing",
        "Potion healing",
        "Potion cureailment",
        "Potion blindness",
        "Potion restoremagic",
        "Potion invisibility",
        "Potion levitation",
        "Potion speed",
        "Potion acid",
        "Potion paralysis",
        "Scroll mail",
        "Scroll identify",
        "Scroll light",
        "Scroll blank",
        "Scroll enchantweapon",
        "Scroll enchantarmor",
        "Scroll removecurse",
        "Scroll fire",
        "Scroll food",
        "Scroll magicmapping",
        "Scroll repair",
        "Scroll destroyarmor",
        "Scroll teleportation",
        "Scroll summon",
        "Magicstaff light",
        "Magicstaff digging",
        "Magicstaff locking",
        "Magicstaff magicmissile",
        "Magicstaff opening",
        "Magicstaff slow",
        "Magicstaff cold",
        "Magicstaff fire",
        "Magicstaff lightning",
        "Magicstaff sleep",
        "Ring adornment",
        "Ring slowdigestion",
        "Ring protection",
        "Ring warning",
        "Ring strength",
        "Ring constitution",
        "Ring invisibility",
        "Ring magicresistance",
        "Ring conflict",
        "Ring levitation",
        "Ring regeneration",
        "Ring teleportation",
        "Spellbook forcebolt",
        "Spellbook magicmissile",
        "Spellbook cold",
        "Spellbook fireball",
        "Spellbook light",
        "Spellbook removecurse",
        "Spellbook lightning",
        "Spellbook identify",
        "Spellbook magicmapping",
        "Spellbook sleep",
        "Spellbook confuse",
        "Spellbook slow",
        "Spellbook opening",
        "Spellbook locking",
        "Spellbook levitation",
        "Spellbook invisibility",
        "Spellbook teleportation",
        "Spellbook healing",
        "Spellbook extrahealing",
        "Spellbook cureailment",
        "Spellbook dig",
        "Gem rock",
        "Gem luck",
        "Gem garnet",
        "Gem ruby",
        "Gem jacinth",
        "Gem amber",
        "Gem citrine",
        "Gem jade",
        "Gem emerald",
        "Gem sapphire",
        "Gem aquamarine",
        "Gem amethyst",
        "Gem fluorite",
        "Gem opal",
        "Gem diamond",
        "Gem jetstone",
        "Gem obsidian",
        "Gem glass",
        "Tool pickaxe",
        "Tool tinopener",
        "Tool mirror",
        "Tool lockpick",
        "Tool skeletonkey",
        "Tool torch",
        "Tool lantern",
        "Tool blindfold",
        "Tool towel",
        "Tool glasses",
        "Tool beartrap",
        "Food bread",
        "Food creampie",
        "Food cheese",
        "Food apple",
        "Food meat",
        "Food fish",
        "Food tin",
        "Readable book",
        "Spell item",
        "Artifact sword",
        "Artifact mace",
        "Artifact spear",
        "Artifact axe",
        "Artifact bow",
        "Artifact breastpiece",
        "Artifact helm",
        "Artifact boots",
        "Artifact cloak",
        "Artifact gloves",
        "Crystal breastpiece",
        "Crystal helm",
        "Crystal boots",
        "Crystal shield",
        "Crystal gloves",
        "Vampire doublet",
        "Wizard doublet",
        "Healer doublet",
        "Mirror shield",
        "Brass knuckles",
        "Iron knuckles",
        "Spiked gauntlets",
        "Food tomalley",
        "Tool crystalshard",
        "Crystal sword",
        "Crystal spear",
        "Crystal battleaxe",
        "Crystal mace",
        "Bronze tomahawk",
        "Iron dagger",
        "Steel chakram",
        "Crystal shuriken",
        "Cloak black",
        "Magicstaff stoneblood",
        "Magicstaff bleed",
        "Magicstaff summon",
        "Tool blindfold focus",
        "Tool blindfold telepathy",
        "Spellbook summon",
        "Spellbook stoneblood",
        "Spellbook bleed",
        "Spellbook reflect magic",
        "Spellbook acid spray",
        "Spellbook steal weapon",
        "Spellbook drain soul",
        "Spellbook vampiric aura",
        "Spellbook charm",
        "Potion empty",
        "Artifact orb blue",
        "Artifact orb red",
        "Artifact orb purple",
        "Artifact orb green",
        "Tunic",
        "Hat fez",
        "Magicstaff charm",
        "Potion polymorph",
        "Food blood",
        "Cloak backpack",
        "Tool alembic",
        "Potion firestorm",
        "Potion icestorm",
        "Potion thunderstorm",
        "Potion strength",
        "Suede boots",
        "Suede gloves",
        "Cloak silver",
        "Hat hood silver",
        "Hat hood red",
        "Silver doublet",
        "Spellbook revert form",
        "Spellbook rat form",
        "Spellbook spider form",
        "Spellbook troll form",
        "Spellbook imp form",
        "Spellbook spray web",
        "Spellbook poison",
        "Spellbook speed",
        "Spellbook fear",
        "Spellbook strike",
        "Spellbook detect food",
        "Spellbook weakness",
        "Mask shaman",
        "Spellbook amplify magic",
        "Spellbook shadow tag",
        "Spellbook telepull",
        "Spellbook demon illu",
        "Spellbook trolls blood",
        "Spellbook salvage",
        "Tool whip",
        "Spellbook flutter",
        "Spellbook dash",
        "Spellbook self polymorph",
        "Spellbook 9",
        "Spellbook 10",
        "Magicstaff poison",
        "Tool metal scrap",
        "Tool magic scrap",
        "Tool tinkering kit",
        "Tool sentrybot",
        "Tool detonated charge",
        "Tool fire bomb",
        "Tool sleep bomb",
        "Tool freeze bomb",
        "Tool teleport bomb",
        "Tool gyrobot",
        "Tool spellbot",
        "Tool decoy",
        "Tool dummybot",
        "Machinist apron",
        "Enchanted feather",
        "Punisher hood",
        "Scroll charging",
        "Quiver silver",
        "Quiver pierce",
        "Quiver lightweight",
        "Quiver fire",
        "Quiver heavy",
        "Quiver crystal",
        "Quiver hunting",
        "Longbow",
        "Compound bow",
        "Heavy crossbow",
        "Boomerang",
        "Scroll conjurearrow",
        "Monocle",
        "Tool player loot bag",
        "Mask bandit",
        "Mask eyepatch",
        "Mask masquerade",
        "Mask mouth rose",
        "Mask golden",
        "Mask spooky",
        "Mask tech goggles",
        "Mask hazard goggles",
        "Mask phantom",
        "Mask pipe",
        "Mask grass sprig",
        "Mask plague",
        "Mask mouthknife",
        "Hat silken bow",
        "Hat plumed cap",
        "Hat bycocket",
        "Hat tophat",
        "Hat bandana",
        "Hat circlet",
        "Hat crown",
        "Hat laurels",
        "Hat turban",
        "Hat crowned helm",
        "Hat warm",
        "Hat wolf hood",
        "Hat bear hood",
        "Hat stag hood",
        "Hat bunny hood",
        "Hat bountyhunter",
        "Hat miter",
        "Hat headdress",
        "Hat chef",
        "Helm mining",
        "Mask steel visor",
        "Mask crystal visor",
        "Mask artifact visor",
        "Hat circlet wisdom",
        "Hat hood apprentice",
        "Hat hood assassin",
        "Hat hood whispers",
        "Ring resolve",
        "Cloak guardian",
        "Mask marigold",
        "Key stone",
        "Key bone",
        "Key bronze",
        "Key iron",
        "Key silver",
        "Key gold",
        "Key crystal",
        "Key machine",
        "Tool foci fire",
        "Instrument flute",
        "Instrument lyre",
        "Instrument drum",
        "Instrument lute",
        "Instrument horn",
        "Rapier",
        "Amulet burningresist",
        "Grease ball",
        "Branch staff",
        "Branch bow",
        "Branch bow infected",
        "Dust ball",
        "Bolas",
        "Steel flail",
        "Food ration",
        "Food ration spicy",
        "Food ration sour",
        "Food ration bitter",
        "Food ration hearty",
        "Food ration herbal",
        "Food ration sweet",
        "Slop ball",
        "Tool frying pan",
        "Cleat boots",
        "Bandit breastpiece",
        "Tunic blouse",
        "Bone breastpiece",
        "Blackiron breastpiece",
        "Silver breastpiece",
        "Iron pauldrons",
        "Quilted gambeson",
        "Robe cultist",
        "Robe healer",
        "Robe monk",
        "Robe wizard",
        "Shawl",
        "Chain hauberk",
        "Bone bracers",
        "Blackiron gauntlets",
        "Silver gauntlets",
        "Quilted gloves",
        "Chain gloves",
        "Bone boots",
        "Blackiron boots",
        "Silver boots",
        "Quilted boots",
        "Loafers",
        "Chain boots",
        "Scutum",
        "Bone shield",
        "Blackiron shield",
        "Silver shield",
        "Cloak dendrite",
        "Bone helm",
        "Blackiron helm",
        "Silver helm",
        "Hat felt",
        "Quilted cap",
        "Hood teal",
        "Chain coif",
        "Food shroom",
        "Food nut",
        "Tool foci snow",
        "Tool foci needles",
        "Tool foci arcs",
        "Tool foci sand",
        "Tool foci dark life",
        "Tool foci dark rift",
        "Tool foci dark silence",
        "Tool foci dark vengeance",
        "Tool foci dark suppress",
        "Tool foci light peace",
        "Tool foci light justice",
        "Tool foci light providence",
        "Tool foci light purity",
        "Tool foci light sanctuary",
        "Magicstaff scepter",
        "Tome sorcery",
        "Tome mysticism",
        "Tome thaumaturgy",
        "Hat circlet sorcery",
        "Hat circlet thaumaturgy",
        "Tool duck",
        "Shillelagh mace",
        "Claymore sword",
        "Anelace sword",
        "Lance spear",
        "Steel falshion",
        "Steel greataxe",
        "Blackiron axe",
        "Blackiron crossbow",
        "Blackiron dart",
        "Blackiron mace",
        "Blackiron sword",
        "Blackiron trident",
        "Bone axe",
        "Bone mace",
        "Bone shortbow",
        "Bone spear",
        "Bone sword",
        "Bone throwing",
        "Silver axe",
        "Silver glaive",
        "Silver mace",
        "Silver plumbata",
        "Silver sword",
        "Quiver bone",
        "Quiver blackiron",
        "Gem jewel",
        "Spellbook meteor",
        "Spellbook ice wave",
        "Spellbook guard body",
        "Spellbook guard spirit",
        "Spellbook divine guard",
        "Spellbook prof nimbleness",
        "Spellbook prof greater might",
        "Spellbook prof counsel",
        "Spellbook prof sturdiness",
        "Spellbook bless food",
        "Spellbook pinpoint",
        "Spellbook donation",
        "Spellbook scry allies",
        "Spellbook scry traps",
        "Spellbook scry treasures",
        "Spellbook detect enemy",
        "Spellbook turn undead",
        "Spellbook heal other",
        "Spellbook blood ward",
        "Spellbook divine zeal",
        "Spellbook maximise",
        "Spellbook minimise",
        "Spellbook incoherence",
        "Spellbook overcharge",
        "Spellbook envenom weapon",
        "Spellbook psychic spear",
        "Spellbook defy flesh",
        "Spellbook grease spray",
        "Spellbook blood waves",
        "Spellbook command",
        "Spellbook metallurgy",
        "Spellbook forge key",
        "Spellbook reshape weapon",
        "Spellbook alter arrow",
        "Spellbook void chest",
        "Spellbook lead bolt",
        "Spellbook numbing bolt",
        "Spellbook curse flesh",
        "Spellbook cowardice",
        "Spellbook seek ally",
        "Spellbook deep shade",
        "Spellbook spirit weapon",
        "Spellbook spores",
        "Spellbook windgate",
        "Spellbook telekinesis",
        "Spellbook disarm",
        "Spellbook abundance",
        "Spellbook preserve",
        "Spellbook sabotage",
        "Spellbook mist form",
        "Spellbook force shield",
        "Spellbook splinter gear",
        "Spellbook attract items",
        "Spellbook absorb magic",
        "Spellbook tunnel",
        "Spellbook null area",
        "Spellbook fire sprite",
        "Spellbook spin",
        "Spellbook cleanse food",
        "Spellbook flame cloak",
        "Spellbook lightning bolt",
        "Spellbook disrupt earth",
        "Spellbook fire wall",
        "Spellbook slam",
        "Spellbook ignite",
        "Spellbook shatter objects",
        "Spellbook kinetic field",
        "Spellbook thorns",
        "Spellbook magicians armor",
        "Spellbook heal minor",
        "Spellbook sigil",
        "Spellbook sanctuary",
        "Spellbook holy beam",
        "Spellbook dominate"
    ];
    $scope.itemsSorted = [... $scope.items].sort();
    $scope.quality = ["Destroyed", "Decrepit", "Worn", "Serviceable", "Excellent"];


    // Function for loading a saved game
    $scope.load = function() {
        console.log("Started");
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
        return
    };

    // Function for loading a newly created save game
    $scope.loadNew = function() {
        console.log("Started");
        $scope.saveData =  structuredClone($scope.newGame);
        $scope.saveData.players[0].playerNum = 0;
        $scope.saveData.gamekey = $scope.generateNumber(10);
        $scope.saveData.hash = $scope.generateNumber(10);
        $scope.saveData.lobbykey = $scope.generateNumber(10);
        $scope.saveData.mapseed = $scope.generateNumber(9);
        return
    }

    // Function for generating a number of n length
    $scope.generateNumber = function(n) {
        let num = "";
        for (let i = 0;i<(n);i++) {
            num = num + Math.round(Math.random()*10).toString();
        }
        return parseInt(num)
    }


    // Function for adding player to object
    $scope.addPlayer = function() {
        let players = $scope.saveData.players;
        let playersConnected = $scope.saveData.players_connected;

        if (players.filter(p => p.stats.name != "").length > 3) {
            console.log("Player maximum is four, maximum already reached. Player not added.");
            return
        }

        let freeSlot = players.map(p => p.stats.name != "").indexOf(false);
        players[freeSlot] = structuredClone($scope.newGame.players[0]);
        players[freeSlot].stats.name = "Player " + (freeSlot + 1);
        players[freeSlot].playerNum = freeSlot;

        if (!playersConnected[freeSlot]) {
            playersConnected[freeSlot] = 1;
        }
        return
    }

    // Function for removing a player from object
    $scope.removePlayer = function() {
        let players = $scope.saveData.players;
        let playersConnected = $scope.saveData.players_connected;

        if (players.filter(p => p.stats.name == "").length > 2) {
            console.log("Player minimum is one, minimum already reached. Player not removed.");
            return
        }

        let freeSlot = 0;
        
        for (freeSlot;freeSlot < players.length;freeSlot++) {
            if (players[freeSlot].stats.name == "") {
                break
            }
        }

        freeSlot--
        players[freeSlot] = structuredClone($scope.newGame.players[1]);

        if (playersConnected[freeSlot]) {
            playersConnected[freeSlot] = 0;
        }
        return
    }

    // Export as file
    $scope.export = function() {
        // Correctly set race and type flags
        for (let i=0;i<$scope.saveData.players.length;i++) {
            $scope.saveData.players[i].stats.type = $scope.types.indexOf($scope.races[$scope.saveData.players[i].race].toLowerCase());
            $scope.saveData.players[i].stats.MISC_FLAGS[4] = $scope.saveData.players[i].race;
        }

        let copyData = structuredClone($scope.saveData);

        for (let i=0;i<copyData.players.length;i++) {
            delete copyData.players[i].playerNum;
        }

        let thisDL = document.createElement("a");
        thisDL.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(copyData)));
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

    // Function for getting player's carried inventory sorted and next empty slot
    $scope.getCarriedInventory = function (inventory) {
        let cachedInventory = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ];
        let firstEmpty = [];

        for (let i = 0;i < inventory.length;i++) {
            // Put inventory items in the cached inventory positions
            if (inventory[i].type != 162 && inventory[i].x != -9999) {
                cachedInventory[inventory[i].y][inventory[i].x] = inventory[i];
            }
        }

        // While we're at it, get the first empty position
        for (let y = 0;y < cachedInventory.length;y++) {
            for (let x = 0;x < cachedInventory[y].length; x++) {
                if (!cachedInventory[y][x] && firstEmpty.length < 1) {
                    firstEmpty = [x, y];
                }
            }
        }
        return [cachedInventory, firstEmpty]
    }

    // Function for adding item to player's carried inventory
    $scope.addItem = function () {
        let thisAmount = document.getElementById(event.srcElement.id[0] + "_item_amount").value;
        let thisQuality = document.getElementById(event.srcElement.id[0] + "_item_quality_select").value;
        let thisItem = document.getElementById(event.srcElement.id[0] + "_item_select").value;
        let thisBonus = document.getElementById(event.srcElement.id[0] + "_item_bonus").value;
        let thisPlayer = angular.element(document.getElementById(event.srcElement.id)).scope().player;
        
        // Get player inventory and free inventory space
        let playerInventory = thisPlayer.stats.inventory;
        let cachedInventory = $scope.getCarriedInventory(playerInventory)[1];

        // End early if no inventory space
        if (cachedInventory.length < 1) {
            console.log("No inventory space, item was not added!");
            return
        }

        // Add item in next available slot
        let newInventoryItem = {
            "type": $scope.items.indexOf(thisItem),
            "status": $scope.quality.indexOf(thisQuality),
            "appearance": 0,
            "beatitude": parseInt(thisBonus),
            "count": parseInt(thisAmount),
            "identified": true,
            "x": cachedInventory[0],
            "y": cachedInventory[1]
        };
        playerInventory.push(newInventoryItem);
        return
    }

    // Function for removing item from player's carried inventory
    $scope.removeItem = function () {
        let thisAmount = document.getElementById(event.srcElement.id[0] + "_item_amount").value;
        let thisQuality = document.getElementById(event.srcElement.id[0] + "_item_quality_select").value;
        let thisItem = document.getElementById(event.srcElement.id[0] + "_item_select").value;
        let thisBonus = document.getElementById(event.srcElement.id[0] + "_item_bonus").value;
        let thisPlayer = angular.element(document.getElementById(event.srcElement.id)).scope().player;
        let playerInventory = thisPlayer.stats.inventory;

        // Search inventory for exact item and remove it
        let itemRemoved = 0;
        let removeInventoryItem = {
            "type": $scope.items.indexOf(thisItem),
            "status": $scope.quality.indexOf(thisQuality),
            "beatitude": parseInt(thisBonus),
            "count": parseInt(thisAmount),
        };
        
        for (let i = 0;i < playerInventory.length;i++) {
            if (playerInventory[i].type == removeInventoryItem.type && playerInventory[i].status == removeInventoryItem.status && playerInventory[i].beatitude == removeInventoryItem.beatitude && playerInventory[i].count == removeInventoryItem.count) {
                playerInventory.splice(i, 1);
                itemRemoved = 1;
                break
            }
        }
        
        if (itemRemoved == 0) {
            console.log("Item not found in inventory, item not removed! Item to remove must match settings exactly.");
        }
        return
    }
    return
});