import fetch from 'node-fetch'
let handler = async(m, { conn, text } => {
	if (!text) throw 'Masukan teks!'
	let anu = await fetch(global.API('neoxr', '/api/mimpi', { q: text }, 'apikey'))
	let json = await anu.json()
	let capt = `Hasil: ${json.data.hasil}\n\nSolusi: ${json.data.solusi}`
	m.reply(capt)
}
handler.help = ['artimimpi'].map(v => v + ' <teks>')
handler.tags = ['tools']

handler.command = /^artimimpi$/i

export default handler