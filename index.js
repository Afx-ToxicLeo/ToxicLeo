const { JslAbu } = require("./lib/")
const start = async () => {
   try {
        await JslAbu()
    } catch (error) {
        console.error(error)
    }
}
start()
