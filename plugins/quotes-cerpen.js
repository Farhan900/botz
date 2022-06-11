import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix }) => {
    let res = await fetch(`https://docs-jojo.herokuapp.com/api/cerpen`)
    let hasil = `*Judul:* ${res.result.title}\n\n*Pengarang:* ${res.result.pengarang}\n*Kategori:* ${res.result.kategori}\n\n   ${res.result.cerpen}`
    m.reply(hasil)
}
handler.help = ['cerpen']
handler.tags = ['quotes']

handler.command = /^(cerpen)$/i
handler.limit = true

export default handler
