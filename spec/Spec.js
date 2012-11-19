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

describe("missing number loop", function() {
	it("guesses the missing number", function() {
		expect(find_missing_loop([1,2,3,4,6])).toEqual(5)
	});
	
	it("returns a message when no number is missing", function() {
		expect(find_missing_loop([1,2,3,4,5])).toEqual("All there")
	})
});

describe("missing number math", function() {
	it("guesses the missing number", function() {
		expect(find_missing_math([1,2,3,4,6])).toEqual(5)
	});
	
	it("returns a message when no number is missing", function() {
		expect(find_missing_math([1,2,3,4,5])).toEqual("All there")
	})
});
