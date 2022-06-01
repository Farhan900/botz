import fetch from 'node-fetch'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json').json()
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakkimia[id][0])
        throw false
    }
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Lambang: ${json.lambang}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakkimia[id] = [
        await conn.sendButton(m.chat, caption, author, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.unsur}*`, author, null, [
                ['Main Lagi', '/tebakkimia']
            ], conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

export default handler

const buttons = [
    ['Bantuan', '/hint'],
    ['Menyerah', 'menyerah']
]