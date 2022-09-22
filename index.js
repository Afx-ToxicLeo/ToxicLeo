const { JslAbu } = require("./lib/client")
const start = async () => {
   try {
        await JslAbu()
    } catch (error) {
        console.error(error)
    }
}
start()
