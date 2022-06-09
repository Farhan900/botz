import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
   if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
   let anu = await fetch(global.API('neoxr', '/api/ig', { url: args[0] }, 'apikey'))
   let json = await anu.json()
   await conn.sendFile(m.chat, json.data.url, 'ig.' + json.data.type, author, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler
