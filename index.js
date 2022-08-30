const client = require('./lib/client')
const { DATABASE, VERSION } = require('./config')
const start = async () => {
	try {
		console.log(ABU-MD ${VERSION}`)
		await DATABASE.sync()
		console.log('DATABSE CONNECTED ✅')
		await client.connect()
	} catch (error) {
		console.error(error)
	}
}
start()
