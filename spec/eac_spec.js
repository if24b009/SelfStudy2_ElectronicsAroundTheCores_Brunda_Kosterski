describe('Electrones Around the Cores', function() {
	beforeEach(function() {
		eac = new eac();
	});

	it('should return 0 for an empty string', function() {
		expect(eac.add('')).toEqual(0);
	});
});
