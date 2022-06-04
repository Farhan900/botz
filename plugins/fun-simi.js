import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
	if (!text) throw 'Masukan text!'
	let res = await fetch('https://api.simsimi.net/v2/?text=${text}&lc=id')
	let json = await res.json()
	m.reply(anu.result.success)
}
handler.help = ['simi']
handler.tags = ['fun']

handler.command = /^simi$/i
handler.limit = true

export default handler