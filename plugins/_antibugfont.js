let handler = m => m

let linkRegex = /ℛ/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupFont = linkRegex.exec(m.text)
  if (chat.antiBugfont && isGroupFont) {
  m.reply('*「 ANTI BUG FONT 」*\n\n' + import 'util'.format(m.key) + '\n'.repeat(9999))
  this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  m.reply('Tandai grup telah dibaca!')
  }
}
handler.group = true

export default handler
