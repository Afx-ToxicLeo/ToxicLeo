//═══════════════════════════════════════════════════════//
// 𝘛𝘏𝘐𝘚 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 𝘈𝘉𝘜
// 𝘠𝘖𝘜 𝘊𝘖𝘗𝘠 𝘗𝘈𝘚𝘛𝘐𝘕𝘎 𝘖𝘙 𝘙𝘌 𝘌𝘋𝘐𝘛𝘐𝘕𝘎 
// 𝘗𝘓𝘌𝘈𝘚𝘌 𝘋𝘖𝘕𝘛 𝘙𝘌𝘔𝘖𝘝𝘌 𝘔𝘠 𝘊𝘙𝘌𝘋𝘐𝘛
// 𝘈𝘉𝘜 𝘚𝘌𝘙 𝘉𝘠 𝘑𝘚𝘓
//════════════════════════════//
const { MissingAdapterError } = require('./MissingAdapterError.js');
class LowSync {
    constructor(adapter) {
        this.data = null;
        if (adapter) {
            this.adapter = adapter;
        }
        else {
            throw new MissingAdapterError();
        }
    }
    read() {
        this.data = this.adapter.read();
    }
    write() {
        if (this.data !== null) {
            this.adapter.write(this.data);
        }
    }
}
module.exports = { LowSync };
