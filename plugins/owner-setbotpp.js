let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `Foto tidak ditemukan`
        await hisoka.updateProfilePicture(bot, { url: img })
        conn.reply(m.chat, 'Sukses Mengganti Foto Profile Bot!', m)
    }
}
handler.help = ['setbotpp']
handler.tags = ['owner']

handler.command = /^(setbotpp)$/i
handler.owner = true

export default handler
