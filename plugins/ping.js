const  Jsl = require('../utils')

Jsl.addCommand(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "🥱",
                category: ["system", "all"],
	   },
	async (message, client) => {
             try {
		const start = new Date().getTime()
		await client.sendMessage( message.from, { text: 'Ping!' }, { quoted: message })
		const end = new Date().getTime()
		await client.sendMessage( message.from, { text: 'Pong!\n' + (end - start) + 'ms' }, { quoted: message })
		global.catchError = false;
                } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
                }
	 }
);
