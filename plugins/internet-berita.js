import fetch from 'node-fetch'
let handler = async(m, { conn, command }) => {
	let res = await fetch(`https://docs-jojo.herokuapp.com/api/news`)
	let json = await res.json()
	let isi = json.articles.map(res=>`*Judul:* ${json.title}\n*Author:* ${json.author}\n*Publish:* ${json.publishedAt}\n*Deskripsi:* ${json.description}\n*URL:* ${json.url}`).join('\n\n━ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━\n\n').trim()
	let hasil = `*「 ${command.toUpperCase()} 」*\n\n*Total Berita:* ${json.totalResults}\n`
    conn.reply(m.chat, hasil + isi, m)
}
handler.help = ['berita', 'news']
handler.tags = ['internet']

handler.command = /^(berita|news)$/i
handler.fail = null

export default handler
