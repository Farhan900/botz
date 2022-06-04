let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(dadu), 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker', 'fun']
handler.command = /^dadu$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let dadu = [
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/yhdyhnap',
  'https://tinyurl.com/yfwjbou7',
  'https://tinyurl.com/yh3e3ogt',
  'https://tinyurl.com/yfmhpvxs',
  'https://tinyurl.com/ygpxka9q'
]