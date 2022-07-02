import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let anu = await fetch(global.API('neoxr', '/api/tiktok', { url: args[0] }, 'apikey'))
    let json = await anu.json()
    conn.sendFile(m.chat, json.data.audio, 'tiktokaudio.mp3', '', m)
}
handler.help = ['tiktokaudio', 'tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktokaudio|tiktokmp3)$/i

export default handler
