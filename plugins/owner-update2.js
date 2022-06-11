import { default: fetch } from 'node-fetch'
import { createWriteStream, existsSync } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

let confirmation = {}
let repository = 'Nurutomo/wabot-aq'
let branch = 'master'

export async function handler(m, { text }) {
    let res = await fetch(`https://raw.githubusercontent.com/${repository}/${branch}/${text}`)
    if (!res.ok) throw await res.text()
    let filename = join(__dirname, '..', text)
    if (existsSync(filename)) {
        confirmation[m.sender] = {
            res,
            filename,
            text,
            timeout: setTimeout(() => (m.reply('timed out'),delete confirmation[m.sender]), 60000)
        }
        throw 'File telah tersedia, apakah kamu yakin untuk menimpa file lama? (Y/n) (60s Hitung mundur)'
    }
    res.body.pipe(createWriteStream(filename))
    res.body.once('end', () => {
        m.reply('Sukses Memperbarui!')
        conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
    })
}

handler.all = async m => {
    if (!(m.sender in confirmation)) return
    let { res, filename, text, timeout } = confirmation[m.sender]
    if (/^y(es|a)?$/i.test(m.text)) {
        res.body.pipe(createWriteStream(filename))
        res.body.once('end', () => {
            m.reply('Sukses Menimpa!')
            conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
        })
        clearTimeout(timeout)
        delete confirmation[m.sender]
        return !0
    } else if (/^no?$/i.test(m.text)) {
        delete confirmation[m.sender]
        m.reply('Dibatalkan')
        clearTimeout(timeout)
        return !0
    }
}
handler.help = ['update2']
handler.tags = ['owner']

handler.command = /^update2$/i
handler.rowner = true

export default handler
