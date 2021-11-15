describe('tax calculator tests', () => {
	it('should calculate lower-bracket', () => {
		expect(calcTaxes(5000)).toEqual(500)
		expect(calcTaxes(25000)).toEqual(2500)
	})

	it('should calculate upper-bracket', () => {
		expect(calcTaxes(40000)).toEqual(10000)
		expect(calcTaxes(100000)).toEqual(25000)
	})
})
describe('user input tests', () => {
	it('updates user array', () => {
		userInput.value = 'testVal'
		submitForm()
		expect(usernames.length).toBe(1)
		expect(usernames).toContain('testVal')
	})
	afterEach(() => {
		userInput.value = ''
		usernames = []
	})
})
