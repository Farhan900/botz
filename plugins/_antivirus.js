let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    if (m.messageStubType === 68) {
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

export default handler
