import fetch from 'node-fetch'

let handler = m => m

handler.before = async (m) => {
    let chat = db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned) {
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch('https://api.simsimi.net/v2/?text=${text}&lc=id')
	    let json = await res.json()
	    m.reply('Simi: ' + anu.result.success)
        return !0
    }
    return !0
}

export default handler