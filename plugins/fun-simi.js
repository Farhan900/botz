import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
	if (!text) throw 'Masukan text!'
	let res = await fetch(global.API('xteam', '/simisimi', { kata: text }, 'APIKEY'))
	let json = await res.json()
	m.reply('Simi: ' + json.jawaban)
}
handler.help = ['simi']
handler.tags = ['fun']

handler.command = /^simi$/i
handler.limit = true

export default handler