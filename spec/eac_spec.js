describe('Electrones Around the Cores', function() {
	beforeEach(function() {
		eac = new eac();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		expect(eac.add('[ 1, 2, 3, 4, 5 ]')).toEqual(6);
	});
});
