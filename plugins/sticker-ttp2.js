import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
  try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=71a53fd9c8ab7600c556436e&text=${teks}`, 'ttp2.webp', '', m, false, { asSticker: true })
  } catch (e) {
    m.reply('Conversion Failed')
    throw false
  }
}
handler.help = ['ttp2 <teks>']
handler.tags = ['sticker']
handler.command = /^(ttp2)$/i
handler.limit = true

export default handler