import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`
*Sn Kamu Adalah:*

```${sn}```

_Bintangi SN agar dapat melakukan penghapusan pendaftaran_
`.trim())
}

handler.help = ['ceksn']
handler.tags = ['xp']

handler.command = /^(ceksn)$/i
handler.register = true

export default handler
