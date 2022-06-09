import fetch from 'node-fetch'
let handler = async(m, { conn, text1, text2, text3 }) => {
	if (!text1) throw 'Masukan tanggal!'
	if (!text2) throw 'Masukan bulan!'
	if (!text3) throw 'Masukan tahun!'
	let anu = await fetch(global.API('neoxr', '/api/nikah', { tgl: text1, bln: text2, thn: text3 }, 'apikey'))
	let json = await anu.json()
	let capt = `Tanggal: ${json.data.tanggal}\nKarakteristik: ${json.data.karakteristik}\n\n${json.data.hasil}`
	m.reply(capt)
}
handler.help = ['ramalnikah']
handler.tags = ['fun']

handler.command = /^ramalnikah$/i
handler.limit = true

export default handler