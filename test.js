const calcTaxes = (income) => {
	if (income > 30000) {
		return income * 0.25
	} else {
		return income * 0.1
	}
}
console.log(calcTaxes(1000))

let usernames = []
let userInput = document.getElementById('username')
let submiteForm = () => {
	usernames.push(userInput.value)
	return usernames
}
