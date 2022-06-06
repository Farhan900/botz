import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(hint)/i.test(m.quoted.text) || /.*(hint)/i.test(m.text)) return !0
    this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
    if (!(id in this.tebakgambar)) return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, ['Tebak Gambar', '/tebakgambar'], m)
    if (m.quoted.id == this.tebakgambar[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.tebakgambar[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakgambar[id][2]} XP`, author, ['Tebak Gambar', '/tebakgambar'], m)
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler