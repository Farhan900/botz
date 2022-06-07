import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let anu = await fetch(`https://melcanz.com/tiktok2?url=${args[0]}&apikey=ZZBk7EBb`
    let json = await anu.json()
    conn.sendFile(m.chat, json.audio, 'tiktokaudio.mp3', '', m)
}
handler.help = ['tiktokaudio', 'tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(audio|mp3)?)$/i

export default handler