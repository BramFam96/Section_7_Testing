it('should calculate the correct monthly rate to two decimal places', function () {
	const lowVals = { loan_amount: 1200, loan_years: 1, loan_rate: 0 }
	const highVals = { loan_amount: 60000, loan_years: 5, loan_rate: 12 }
	expect(calculateMonthlyPayment(lowVals)).toEqual('100.00')
	expect(calculateMonthlyPayment(highVals)).toEqual('1010.00')
})

it('should return a result with 2 decimal places', function () {
	// ..
})

/// etc
