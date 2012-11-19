function validateForm(formElement){
		if (formElement.firstname.value.length < 4) {
				alert("Name must be at least 5 letters!")
				return false
		} else if (formElement.lastname.value.length < 4) {
				alert("Last name must be at least 5 letters!")
				return false
		} else if (validBirthday(formElement.birthday.value) == false) {
				alert("Please use MM/DD/YYYY format for your birthday")
				return false
		}
		
		function validBirthday(birthday) {
				var match = /^(\d\d)\/(\d\d)\/(\d\d\d\d)$/.exec(birthday);
				if (!match) {
					return false
				}
		}
}