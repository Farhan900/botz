import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await fetch(`http://docs-jojo.herokuapp.com/api/cersex`)
  let json = await res.json()
  let hasil = `~> *Judul* : ${res.result.judul}\n\n${res.result.cersex}`
  conn.sendFile(m.chat, res.result.img, 'carsex.jpg', hasil, m)
}
handler.help = ['cersex'].map(v => v + ' <nama>')
handler.tags = ['premium']

handler.command = /^(carsex|cerita_sex)$/i
handler.fail = null
handler.premium = true

export default handler
