let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Sending Session')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')    
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    let sesi = await fs.readFileSync('./session.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['host']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

module.exports = handler
