let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(citacita), 'cita.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['cita-cita']
handler.tags = ['fun']
handler.command = /^cita-cita$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let citacita = [
"https://j.top4top.io/m_2179feezl4.mp3",
"https://i.top4top.io/m_2179pt5j03.mp3",
"https://h.top4top.io/m_2179kgnvd2.mp3",
"https://g.top4top.io/m_2179gibw81.mp3",
"https://f.top4top.io/m_2179coqo94.mp3",
"https://e.top4top.io/m_2179ztpoe3.mp3",
"https://d.top4top.io/m_2179d7y9g2.mp3",
"https://c.top4top.io/m_2179afzry1.mp3",
"https://c.top4top.io/m_21790km2z3.mp3",
"https://b.top4top.io/m_2179malas2.mp3",
"https://a.top4top.io/m_2179t575l1.mp3",
"https://g.top4top.io/m_2179r8szp4.mp3",
"https://f.top4top.io/m_2179btrbf3.mp3",
"https://e.top4top.io/m_2179qnalv2.mp3",
"https://d.top4top.io/m_2179j9lkx1.mp3",
"https://e.top4top.io/m_2179bo2g25.mp3",
"https://d.top4top.io/m_2179m8z1j4.mp3",
"https://c.top4top.io/m_21794tgfk3.mp3",
"https://b.top4top.io/m_2179kwl9s2.mp3",
"https://a.top4top.io/m_2179y7u8c1.mp3",
"https://k.top4top.io/m_2179mp42w5.mp3",
"https://j.top4top.io/m_21791j8mz4.mp3",
"https://i.top4top.io/m_2179d6z7l3.mp3",
"https://h.top4top.io/m_2179ndvoy2.mp3",
"https://f.top4top.io/m_2179pfgw11.mp3"
]