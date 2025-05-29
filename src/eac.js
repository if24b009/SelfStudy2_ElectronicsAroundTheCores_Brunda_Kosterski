// Electrones Around the Cores
function eac() { }
eac.prototype.add = function (dice) {
    let cores = [];         //Values appearing only once
    let electronCt = 0; 	//Count values appearing more than once

    //Check each possible dice value (1-6)
    for (let value = 1; value <= 6; value++) {
        let count = 0;

        //Count how many times value appears in dice
        for (let index = 0; index < dice.length; index++) {
            if (dice[index] === value) count++;
        }

        if (count === 1) cores.push(value); //Value appears exactly once => "core"
        if (count > 1) electronCt++; //Value appears more than once => "electron"
    }

    if (cores.length === dice.length) return dice.length + 1; //Special: all dice are cores (no repeats)

	if (cores.length === 0) return dice.length; //Special: all dice are electrons (no cores)

	//Regular case: add up all core values
    let coreSum = 0;
    for (let index = 0; index < cores.length; index++) {
        coreSum += cores[index];
    }

    //Final calculation depends on how big the core sum is
    return coreSum <= 4 ? coreSum - electronCt : coreSum * electronCt;
};
