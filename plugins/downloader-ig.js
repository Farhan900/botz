import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukan url!`
  if(/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/i.test(args[0])) {
  let anu = await fetch(global.API('zenz', '/downloader/instagram2', { url: args[0] }, 'apikey'))
  for (let media of anu.data) conn.sendFile(m.chat, media, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), author, m)
  } else if(/\/stories\/([^\s&]+)/i.test(args[0])) {
  let anu = await fetch(global.API('zenz', '/downloader/instastory', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, anu.media[0].url, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), author, m)
  }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram)$/i

handler.limit = true

export default handler
