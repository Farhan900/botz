let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukan Nama Baru Untuk Bot!'
    await conn.updateProfileName(text)
    conn.reply(m.chat, 'Sukses Mengganti Nama Bot', m)
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

export default handler
