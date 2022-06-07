import { WA_DEFAULT_EPHEMERAL } from '@adiwajshing/baileys'
let handler = async (m, { conn, args, isBotAdmin, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!isBotAdmin) return dfail('botAdmin', m, conn)
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    if (args[0] == 'on') await conn.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
    else if (args[0] == '24') await conn.sendMessage(m.chat, { disappearingMessagesInChat: 24 * 60 * 60 })
    else if (args[0] == '9') await conn.sendMessage(m.chat, { disappearingMessagesInChat: 90 * 60 * 60 })
    else if (args[0] == 'off') await conn.sendMessage(m.chat, { disappearingMessagesInChat: false })
}
handler.help = ['ephe [on]']
handler.tags = ['tools']
handler.command = /^(ephe)$/i

export default handler
