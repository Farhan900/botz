import { siapakahaku } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
Soal: ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}who untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, ['Main Lagi', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

export default handler

const buttons = [
    ['Bantuan', '/hint'],
    ['Menyerah', 'menyerah']
]