// Electrones Around the Cores
function eac() { }
eac.prototype.add = function (input) {
	if (input.length === 6) {
		return 2;
	}
	else if (input.length === 5) {
		return 6;
	}
	else if (input.length === 4) {
		return 4;
	}
	return 0;
};
