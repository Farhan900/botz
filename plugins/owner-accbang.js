let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Tidak dapat mempromote diri sendiri :/'
  if (isAdmin) throw 'Tidak dapat mempromote kamu yang sudah jadi admin!'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.help = ['admin.']
handler.tags = ['owner']

handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true

export default handler
