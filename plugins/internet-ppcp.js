import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let res = await fetch(global.API('xteam', '/randomimage/ppcouple', 'APIKEY'))
let json = await res.json()
conn.sendButton(m.chat, 'Cowoknya', author, json.result.male, ['Get again', '/ppcp'], m)
conn.sendButton(m.chat, 'Ceweknya', author, json.result.female, ['Get again', '/ppcp'], m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'image']

handler.command = /^(pp(cp|couple))$/i
handler.limit = true

export default handler