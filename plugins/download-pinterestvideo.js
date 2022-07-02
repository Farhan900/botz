import fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) throw `Use example ${usedPrefix}${command} https://id.pinterest.com/pin/267893877823775677/`
	let anu = await fetch(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=71a53fd9c8ab7600c556436e&url=${args[0]}`)
	let json = await anu.json()
	let url = json.result.720p
	if (!url) throw 'Can\'t download video!'
	conn.sendFile(m.chat, url, 'pinterestvideo.mp4', `🔗 *Url:* ${url}`.trim(), m)
}
handler.help = ['pinterestvideo']
handler.tags = ['downloader']

handler.command = /^pinterestvideo$/i
handler.limit = true

export default handler
