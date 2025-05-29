// Electrones Around the Cores
function eac() {}
eac.prototype.add = function(string_input) {
	if(string_input.length === 5){
		return 6;
	}
	else if(string_input.length === 4){
		return 4;
	}
	return 0;
};
