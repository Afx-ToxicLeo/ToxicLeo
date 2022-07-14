const {
    commands: commands,
    Module: Module
} = require("../main"), {
    MODE: MODE,
    HANDLERS: HANDLERS
} = require("../config"), {
    FancyRandom: FancyRandom,
    getListFromCommand: getListFromCommand,
    getBuffer: getBuffer
} = require("abu-bot");
let w = "public" != MODE;
const readMore = String.fromCharCode(8206).repeat(4001);
Module({
    pattern: "list ?(.*)",
    fromMe: w,
    dontAddCommandList: true
}, async (n, a) => {
    var e = "";
    if (a[1]) {
        e = "";
        commands.map(async n => {
            if (!n.dontAddCommandList && void 0 !== n.pattern) {
                try {
                    n.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var t = n.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    n.pattern
                }
                if (t.endsWith(" ")) t = n.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(" ", "");
                if (t == a[1]) {
                    var r = "";
                    r = /\[(\W*)\]/.test(HANDLERS) ? HANDLERS.match(/\[(\W*)\]/)[1][0] : ".", "" == n.desc && "" == !n.usage && "" == n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + "Example" + ": " + n.usage + "\n\n"), "" == !n.desc && "" == n.usage && "" == n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + n.desc + " \n\n"), "" == n.desc && "" == n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + n.warn + "\n\n"), "" == !n.desc && "" == !n.usage && "" == n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + n.desc + " \n" + "Example" + ": " + n.usage + "\n\n"), "" == !n.desc && "" == n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + n.desc + " \n" + "Warning" + ": " + n.warn + "\n\n"), "" == n.desc && "" == !n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + n.usage + "\n" + "Warning" + ": " + n.warn + "\n\n"), "" == n.desc && "" == n.usage && "" == n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n\n"), "" == !n.desc && "" == !n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + mmatch : n.pattern) + "\n" + n.desc + " \n" + "Example" + ": " + n.usage + "\n" + "Warning" + ": " + n.warn + "\n\n")
                }
            }
        }), "" === e && (e += "Command not found"), await n.sendReply("```Commands list```" + readMore + e)
    } else {
        commands.map(async n => {
            if (!n.dontAddCommandList && void 0 !== n.pattern) {
                try {
                    var a = n.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/),
                        t = n.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    a = [n.pattern]
                }
                var r = "";
                r = /\[(\W*)\]/.test(HANDLERS) ? HANDLERS.match(/\[(\W*)\]/)[1][0] : ".", "" == n.desc && "" == !n.usage && "" == n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\nExample:: " + n.usage + "\n\n"), "" == !n.desc && "" == n.usage && "" == n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n" + n.desc + " \n\n"), "" == n.desc && "" == n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n" + n.warn + "\n\n"), "" == !n.desc && "" == !n.usage && "" == n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n" + n.desc + " \n" + "Example" + ": " + n.usage + "\n\n"), "" == !n.desc && "" == n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n" + n.desc + " \n" + "Warning" + ": " + n.warn + "\n\n"), "" == n.desc && "" == !n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n" + n.usage + "\n" + "Warning" + ": " + n.warn + "\n\n"), "" == n.desc && "" == n.usage && "" == n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n\n"), "" == !n.desc && "" == !n.usage && "" == !n.warn && (e += (a.length >= 3 ? r + t : n.pattern) + "\n" + n.desc + " \n" + "Example" + ": " + n.usage + "\n" + "Warning" + ": " + n.warn + "\n\n")
            }
        });
        var t = FancyRandom(e);
        await n.sendReply(t)
    }
});

