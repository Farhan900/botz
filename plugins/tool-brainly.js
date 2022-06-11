import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
	if (!text) throw 'Masukan pertanyaannya!'
	let res = await fetch(global.API('xteam', '/brainly', { soal: text }, 'APIKEY'))
	let json = await res.json()
	m.reply(json.jawaban)
}
handler.help = ['brainly']
handler.tags = ['tools']

handler.command = /^brainly$/i
handler.limit = true

export default handler