let handler = async (m, { conn }) => {
let emot = conn.pickRandom(emot)
conn.sendMessage(m.chat, {
 	react: {
 		text: emot,
 		key: m.key
 	} })	
}
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let emot = [
"🗿",
"👍",
"💨",
"🩱",
"🐷",
"🐒",
"🌝",
"💩",
"👻",
"🔥",
"🖕",
"🐦",
"😉",
"🤔"
]
