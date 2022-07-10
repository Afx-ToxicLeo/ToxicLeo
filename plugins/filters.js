const {
    Module
} = require('../main');
const FilterDb = require('./sql/filters');
Module({
    pattern: 'filter ?(.*)',
    fromMe: true,
    desc: "Adds filter in chat",
    use: 'utility'
}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (message.reply_message.text) {
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), message.reply_message.text, match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid, {
            text: "_Set_ " + match[0].replace(/['"]+/g, '') + " _to filter ✅_"
        });
        return;
    }
    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid, {
                text: "_No filters found in this chat ❌_"
            })
        } else {
            var mesaj = "_Your filters in this chat:_" + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid, {
                text: mesaj
            });
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid, {
                text: "Wrong format" + ' ```.filter "input" "output"'
            });
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid, {
            text: "Successfully set " + match[0].replace(/['"]+/g, '')
        });
    }
}));
Module({
    pattern: 'stop ?(.*)',
    fromMe: true,
    use: 'utility',
    desc: "Deletes a filter",
    dontAddCommandList: true
}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid, {
            text: "Wrong format!" + '\n*Example:* ```.stop "hello"```'
        })
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));

    if (!del) {
        await message.client.sendMessage(message.jid, {
            text: "There are already no filters like this ❌"
        })
    } else {
        await message.client.sendMessage(message.jid, {
            text: "_Successfully deleted filter ✅_"
        })
    }
}));
Module({
    on: 'text',
    fromMe: false
}, (async (message, match) => {
    if (message.fromMe) return;
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return;
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid, {
                    text: filter.dataValues.text
                }, {
                    quoted: message.data
                });
            }
        }
    );
}));
Module({
    on: 'button',
    fromMe: false
}, (async (message, match) => {
    if (message.fromMe) return;
    if (!message.button) return;
    var filtreler = await FilterDb.getFilter(message.jid);
    var Text = '';
    var ragAnork=Raganork;function raganork(){var RagAnork=['ssa','sRe','ect','tem','spo','has','339QyxEgc','lay','sag','675535dzKmCK','nse','onR','yMe','pla','317272ViUojx','146438iTLuSs','sel','126CmMyzj','280oMeIah','teB','427mbLyJC','dat','ton','but','per','Pro','49670lRUrzk','Tex','edD','Mes','epl','isp','27294wniYJs','878404qOfBdd','Own','mes'];raganork=function(){return RagAnork;};return raganork();}(function(rAganork,RAganork){var RAGanork=Raganork,raGanork=rAganork();while(!![]){try{var RaGanork=parseInt(RAGanork(0xe8))/0x1+parseInt(RAGanork(0xeb))/0x2*(parseInt(RAGanork(0xdf))/0x3)+-parseInt(RAGanork(0xfa))/0x4+-parseInt(RAGanork(0xe2))/0x5+parseInt(RAGanork(0xf9))/0x6*(parseInt(RAGanork(0xed))/0x7)+parseInt(RAGanork(0xe7))/0x8+parseInt(RAGanork(0xea))/0x9*(parseInt(RAGanork(0xf3))/0xa);if(RaGanork===RAganork)break;else raGanork['push'](raGanork['shift']());}catch(rAGanork){raGanork['push'](raGanork['shift']());}}}(raganork,0x2f6bc));if(message[ragAnork(0xee)+'a'][ragAnork(0xfc)+ragAnork(0xe1)+'e']['has'+ragAnork(0xfb)+ragAnork(0xf2)+'per'+'ty'](ragAnork(0xf0)+ragAnork(0xef)+ragAnork(0xfe)+'spo'+ragAnork(0xe3)+ragAnork(0xf6)+ragAnork(0xe1)+'e'))Text=message[ragAnork(0xee)+'a']['mes'+'sag'+'e'][ragAnork(0xf0)+ragAnork(0xef)+ragAnork(0xfe)+ragAnork(0xdd)+ragAnork(0xe3)+ragAnork(0xf6)+'sag'+'e'][ragAnork(0xe9)+ragAnork(0xdb)+ragAnork(0xf5)+'isp'+ragAnork(0xe0)+ragAnork(0xf4)+'t'];function Raganork(rAganork,RAganork){var raGanork=raganork();return Raganork=function(RaGanork,rAGanork){RaGanork=RaGanork-0xdb;var RAGanork=raGanork[RaGanork];return RAGanork;},Raganork(rAganork,RAganork);}if(message[ragAnork(0xee)+'a'][ragAnork(0xfc)+ragAnork(0xe1)+'e'][ragAnork(0xde)+'Own'+'Pro'+ragAnork(0xf1)+'ty']('tem'+ragAnork(0xe6)+ragAnork(0xec)+'utt'+ragAnork(0xe4)+ragAnork(0xf7)+ragAnork(0xe5)+ragAnork(0xfd)+'ge'))Text=message['dat'+'a'][ragAnork(0xfc)+'sag'+'e'][ragAnork(0xdc)+'pla'+ragAnork(0xec)+'utt'+'onR'+ragAnork(0xf7)+ragAnork(0xe5)+'ssa'+'ge']['sel'+ragAnork(0xdb)+'edD'+ragAnork(0xf8)+ragAnork(0xe0)+ragAnork(0xf4)+'t'];
    if (!filtreler) return;
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(Text)) {
                await message.client.sendMessage(message.jid, {
                    text: filter.dataValues.text
                }, {
                    quoted: message.data
                });
            }
        }
    );
}));
