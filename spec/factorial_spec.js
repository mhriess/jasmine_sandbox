// Your Jasmine specs here
describe("factorial", function() {
	it("evaluates correctly for a single-digit number", function() {
		expect(factorial(5)).toEqual(120);
	});

	it("evaluates correctly for a double-digit number", function() {
		expect(factorial(10)).toEqual(3628800)
	});

	it("evaluates correctyl when given 0 as an input", function() {
		expect(factorial(0)).toEqual(1)
	});
});

