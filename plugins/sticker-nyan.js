import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn}) => {
  let res = await fetch('https://neko-love.xyz/api/v1/neko')
  let json = await res.json()
  let { url } = json
  conn.sendFile(m.chat, url, 'nyan.webp', '', m, false, { asSticker: true })
}
handler.help = ['nyan']
handler.tags = ['sticker']
handler.command = /^nyan/i

export default handler
