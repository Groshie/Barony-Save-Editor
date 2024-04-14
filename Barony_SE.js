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


    $scope.export = function() {
        console.log($scope.players);
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
            $scope.saveData.players[i].stats.EFFECTS[5] = document.getElementById(i + "_invisible_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[5] = parseInt(document.getElementById(i + "_invisible").value);
            $scope.saveData.players[i].stats.EFFECTS[9] = document.getElementById(i + "_fast_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[9] = parseInt(document.getElementById(i + "_fast").value);
            $scope.saveData.players[i].stats.EFFECTS[11] = document.getElementById(i + "_levitating_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[11] = parseInt(document.getElementById(i + "_levitating").value);
            $scope.saveData.players[i].stats.EFFECTS[12] = document.getElementById(i + "_telepath_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[12] = parseInt(document.getElementById(i + "_telepath").value);
            $scope.saveData.players[i].stats.EFFECTS[16] = document.getElementById(i + "_magicresist_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[16] = parseInt(document.getElementById(i + "_magicresist").value);
            $scope.saveData.players[i].stats.EFFECTS[17] = document.getElementById(i + "_magicreflect_check").checked ? 1 : 0;
            $scope.saveData.players[i].stats.EFFECTS_TIMERS[17] = parseInt(document.getElementById(i + "_magicreflect").value);
        }

        // TODO: Export as file
        console.log($scope.saveData);
        let thisDL = document.createElement("a");
        thisDL.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.saveData)));
        thisDL.download = document.getElementById("file-input").files[0].name;
        thisDL.click();
        thisDL.remove();

        return
    };

    return
});