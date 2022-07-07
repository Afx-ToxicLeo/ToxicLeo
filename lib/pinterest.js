//═══════════════════════════════════════════════════════//
// 𝘛𝘏𝘐𝘚 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 𝘈𝘉𝘜
// 𝘠𝘖𝘜 𝘊𝘖𝘗𝘠 𝘗𝘈𝘚𝘛𝘐𝘕𝘎 𝘖𝘙 𝘙𝘌 𝘌𝘋𝘐𝘛𝘐𝘕𝘎 
// 𝘗𝘓𝘌𝘈𝘚𝘌 𝘋𝘖𝘕𝘛 𝘙𝘌𝘔𝘖𝘝𝘌 𝘔𝘠 𝘊𝘙𝘌𝘋𝘐𝘛
// 𝘈𝘉𝘜 𝘚𝘌𝘙 𝘉𝘠 𝘑𝘚𝘓
//════════════════════════════//

const gis = require("g-i-s")

async function pinterest(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "There is an error" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'xeon',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}

module.exports.pinterest = pinterest