describe('Electrones Around the Cores', function() {
	beforeEach(function() {
		eac = new eac();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		expect(eac.add('[ 1, 2, 3, 4, 5 ]')).toEqual(6);
	});

	it('should return 4 for [ 2, 2, 3, 3 ]', function() {
		expect(eac.add('[ 2, 2, 3, 3 ]')).toEqual(4);
	});
});
