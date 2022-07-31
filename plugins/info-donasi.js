let handler =  m => m.reply(`
Donasi • Pulsa
~> *ALL PAYMENT [+62 882-0064-85504]
~> [+62 882-0064-85504]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
