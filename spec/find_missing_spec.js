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
