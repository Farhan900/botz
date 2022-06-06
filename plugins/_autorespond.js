import fs from 'fs'
let handler = m => m

handler.all = async function (m, { conn, isBlocked }) {

    if (isBlocked || m.fromMe || m.chat.endsWith('broadcast')) return
    let set = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag 
    if (m.isGroup) {
        if (m.mentionedJid.includes(this.user.jid)) {
            await this.sendButton(m.chat,
                isBanned ? `${this.user.name} aktif` : banned ? 'kamu telah dibanned' : `${this.user.name} tidak aktif`,
                author,
                [isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi'], m)
        }
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `*UNDANGAN GRUP TERDETEKSI*\n\n_Untuk mengundang bot ke grupmu_\n\n*Silakan chat owner agar dapat dimasukan kedalam grup!*\n_Chat owner dengan mengeklik tombol dibawah ya!_`.trim(), author, [['Pemilik Bot', '/owner'], ['Donasi', '/donasi']], m)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // update status
        if (new Date() * 1 - set.status > 1000) {
            let _uptime = process.uptime() * 1000
            let uptime = conn.clockString(_uptime)
            await this.setStatus(`Aktif selama ${uptime} | Mode: ${set.self ? 'Private' : set.group ? 'Hanya Grup' : 'Publik'} | ${this.user.name} dibuat oleh JayaGanz`).catch(_ => _)
            set.status = new Date() * 1
      }
}

export default handler