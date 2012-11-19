describe("Sample form", function() {
	var f;
	
	beforeEach(function(){	
		f = document.createElement('form')
		var firstName = document.createElement('input');
		firstName.setAttribute('type', 'text');
		firstName.setAttribute('name', 'firstname')
		
		var lastName = document.createElement('input');
		lastName.setAttribute('type', 'text');
		lastName.setAttribute('name', 'lastname')
		
		var birthday = document.createElement('input');
		birthday.setAttribute('type', 'text');
		birthday.setAttribute('name', 'birthday');
		
		f.appendChild(firstName);
		f.appendChild(lastName);
		f.appendChild(birthday);
	});
	
	it("prohibits first names shorter than five characters", function() {
		f.firstname.value = "Bob"
		expect(validateForm(f)).toBe(false);
	});
	
	it("prohibits last names shorter than five characters", function() {
		f.firstname.value = "Bobloblaw"
		f.lastname.value = "Bob"
		expect(validateForm(f)).toBe(false);
	})
	
	it("prohibits an incorrect birthday format", function() {
		f.firstname.value = "Bobloblaw"
		f.lastname.value = "Bobloblaw"
		f.birthday.value = "September 16, 1987"
		expect(validateForm(f)).toBe(false);
	})
});

// describe("Sample form", function() {
// 	it("returns true", function() {
// 		return true
// 	})
// })