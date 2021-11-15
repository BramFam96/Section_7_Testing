window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc_form')
	if (form) {
		setupIntialValues()
		form.addEventListener('submit', function (e) {
			e.preventDefault()
			update()
		})
	}
})

const getCurrentUIValues = () => {
	return {
		loan_amount: +document.getElementById('loan_amount').value,
		loan_rate: +document.getElementById('loan_rate').value,
		loan_years: +document.getElementById('loan_years').value,
	}
}
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
const setupIntialValues = () => {
	const values = { loan_amount: 0, loan_rate: 0, loan_years: 0 }
	return getAndUpdateInputs(values)
}

// Get the current values from the UI
// Update the monthly payment

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
const calculateMonthlyPayment = (values) => {
	const monthlyI = values.loan_rate / 1200
	const months = values.loan_years * 12
	let monthlyPayment = (values.loan_amount / months) * (1 + monthlyI)
	if (isNaN(monthlyPayment)) {
		return 0
	} else {
		return monthlyPayment.toFixed(2)
	}
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
const updateMonthly = (monthly) => {
	console.log(monthly)
	document.getElementById('monthly_payment').innerText = monthly
}
const getAndUpdateInputs = (values) => {
	for (let key in values) {
		console.log(values[key])
		document.getElementById(key).value = values[key]
	}
	update()
}
const update = () => {
	let values = getCurrentUIValues()
	console.log(getCurrentUIValues())
	console.log(values)
	updateMonthly(calculateMonthlyPayment(values))
}
// window.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('calc_form')
// 	if (form) {
// 		setupIntialValues()
// 		form.addEventListener('submit', function (e) {
// 			e.preventDefault()
// 			update()
// 		})
// 	}
// })

// function getCurrentUIValues() {
// 	return {
// 		amount: +document.getElementById('loan_amount').value,
// 		years: +document.getElementById('loan_years').value,
// 		rate: +document.getElementById('loan_rate').value,
// 	}
// }

// function setupIntialValues() {
// 	const values = { amount: 10000, years: 10, rate: 4.5 }
// 	const amountUI = document.getElementById('loan_amount')
// 	amountUI.value = values.amount
// 	const yearsUI = document.getElementById('loan_years')
// 	yearsUI.value = values.years
// 	const rateUI = document.getElementById('loan_rate')
// 	rateUI.value = values.rate
// 	update()
// }

// function update() {
// 	const currentUIValues = getCurrentUIValues()
// 	updateMonthly(calculateMonthlyPayment(currentUIValues))
// }

// function calculateMonthlyPayment(values) {
// 	const monthlyRate = values.rate / 100 / 12
// 	const n = Math.floor(values.years * 12)
// 	return (
// 		(monthlyRate * values.amount) /
// 		(1 - Math.pow(1 + monthlyRate, -n))
// 	).toFixed(2)
// }

// function updateMonthly(monthly) {
// 	const monthlyUI = document.getElementById('monthly_payment')
// 	monthlyUI.innerText = '$' + monthly
// }
