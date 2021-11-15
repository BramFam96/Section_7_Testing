describe('Servers test (with setup and tear-down)', function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = 'Alice'
	})

	it('should add a new server to allServers on submitServerInfo()', function () {
		submitServerInfo()

		expect(Object.keys(allServers).length).toEqual(1)
		expect(allServers['server' + serverId].serverName).toEqual('Alice')
	})
	it('should reject empty server names on submitServerInfo()', () => {
		serverNameInput = ''
		submitServerInfo()
		expect(Object.keys(allServers).length).toEqual(0)
	})
	afterEach(function () {
		// 	 	// teardown logic
		serverTbody.deleteRow(0)
	})
})
