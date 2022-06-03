let handler = async(m, { conn }) => {
	conn.sendButton(m.chat pickRandom(pantun), author, ['Get again', '/pantun'], m)
}
handler.help = ['pantun']
handler.tags = ['quotes']

handler.command = /^pantun$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let pantun = [
    "Harimau telah semakin sombong\nSuka menghina yang jelak\nMasih kecil telah ompong\nMirip bersama dengan nenek-nenek.",
    "Nemu gelang di pekarangan\nTapi gelang sudah karatan\nSiapa nyampah sembarangan\nPasti pacarnya orang utan.",
    "Lebar sekali daun talas\nUntuk menaikkan daun talam\nMakanya jangan suka malas\nSikat gigi pagi dan malam.",
    "Kancil cari undur-undur\nMencarinya muter-muter\nAda anak suka tidur\nSambil ngorok sambil ngiler.",
    "Berenang jauh para ikan\nMereka bebas hatinya senang\nBadan kurus kurang makan\nKalau ditiup goyang-goyang.",
    "Jalan-jalan ke pinggir empang\nNemu katak di pinggir empang\nHati siapa tak bimbang\nKamu botak minta dikepang.",
    "Pak Tegus pergi ke Bali\nMelihat bule sedang menari\nAduh pantas kau bau sekali\nKau belum mandi enam hari.",
    "Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?.",
    "Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.",
    "Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.",
    "Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.",
    "Manusia akan bahagia selama ia memilih untuk bahagia.",
    "Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.",
    "Apabila sempurna akal seseorang, maka sedikit perkataannya.",
    "Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.",
    "Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.",
    "Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus.",
    "Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.",
    "Penundaan adalah kuburan dimana peluang dikuburkan.",
    "Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.",
    "Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.",
    "Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.",
    "Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.",
    "Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.",
    "Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.",
    "Kesabaran adalah teman dari kebijaksanaan.",
    "Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.",
    "Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.",
    "Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.",
    "Anda tidak perlu harus berhasil pada kali pertama.",
    "Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.",
    "Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.",
    "Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.",
    "Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.",
    "Konsumen yang paling tidak puas adalah sumber berharga untuk belajar.",
    "Kita ada disini bukan untuk saling bersaing. Kita ada disini untuk saling melengkapi.",
    "Semakin kita bersedia bertanggung jawab atas perbuatan-perbuatan kita, semakin banyak kredibilitas yang kita miliki.",
    "Selalu baik untuk memaafkan, tapi yang paling baik adalah melupakan sebuah kesalahan.",
    "Jangan menjadi pohon kaku yang mudah patah. Jadilah bambu yang mampu bertahan melengkung melawan terpaan angin.",
    "Percaya bahwa hidup itu berharga, dan kepercayaan Anda akan membantu menciptakan hidup yang berharga.",
    "Kuatir sama seperti membayar bunga untuk uang yang mungkin tak pernah Anda pinjam.",
    "Jangan sering menyalakan api kebencian terhadap musuhmu, karena nanti akan membakar dirimu sendiri.",
    "Bila kamu jujur kepada dirimu sendiri, bagai siang pasti berganti malam, kamu takkan pernah berdusta kepada orang lain.",
    "Kutu yang berani adalah kutu yang bisa berani mendapatkan sarapannya pada bibir seekor singa.",
    "Kita menyambung hidup dengan apa yang kita peroleh, tapi kita menghadirkan kehidupkan dengan apa yang kita berikan.",
    "Pengetahuan tidaklah cukup, kita harus mengamalkannya. Niat tidak cukup, kita harus melakukannya.",
    "Ketika Anda bertambah tua, Anda akan menemukan satu-satunya hal yang Anda sesali adalah hal-hal yang tidak Anda lakukan.",
    "Batu fondasi untuk sukses yang seimbang adalah kejujuran, watak, integritas, iman, cinta dan kesetiaan.",
    "Kebanyakan orang gagal meraih cita-citanya bukan karena mereka tidak mampu, tetapi karena tidak berkomitmen.",
    "Kita tidak harus hebat saat memulai, tapi kita harus memulai untuk menjadi hebat."
]