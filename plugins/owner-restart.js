import { spawn } from 'child_process'
let handler = async(m, { conn }) => {
    if (!process.send) throw 'Gunakan format node index.js'
    if (global.conn.user.jid == conn.user.jid) {
        await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
        await global.db.save()
        process.send('reset')
    } else throw 'Tidak dapat merestart bot!'
}
handler.help = ['restart']
handler.tags = ['owner']

handler.command = /^restart$/i
handler.owner = true
handler.fail = null

export default handler