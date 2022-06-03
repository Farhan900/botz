let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, author, author, porn, ['Get again', '/18+'], m)
}
handler.help = ['18+']
handler.tags = ['premium']

handler.command = /^(18+|porn)$/i
handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let porn = [
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/80/79/d6/8079d69b8ff92d485acac7fdd75d3da2/8079d69b8ff92d485acac7fdd75d3da2.29.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/e1/c4/a7/e1c4a71964879b37994a5b37b9c7fe60/e1c4a71964879b37994a5b37b9c7fe60.11.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/c5/97/df/c597dff9951d38007b9b31816e963173/c597dff9951d38007b9b31816e963173.23.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/9e/8e/e0/9e8ee03bfa4a83b94e263afcdb7e6aa6/9e8ee03bfa4a83b94e263afcdb7e6aa6.15.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/ba/54/21/ba5421dd74274e4e7e2678092f4e12e4/ba5421dd74274e4e7e2678092f4e12e4.8.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/4a/a4/92/4aa492e1c34fe6ca045f2d4991520159/4aa492e1c34fe6ca045f2d4991520159.15.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/7e/90/90/7e9090d5c232b203f23efd352537020e/7e9090d5c232b203f23efd352537020e.28.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/f0/28/a5/f028a567538fa2da75311452d0004622/f028a567538fa2da75311452d0004622.27.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/36/0e/1f/360e1fd5d94b2eccb9e5b61382eb74c4/360e1fd5d94b2eccb9e5b61382eb74c4.8.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/37/65/8a/37658ab9506164f94b65eb69ea8dc761/37658ab9506164f94b65eb69ea8dc761.5.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/bf/04/1f/bf041fc057dd41e2e3777269b0279c0f/bf041fc057dd41e2e3777269b0279c0f.21.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/69/a8/af/69a8af2d53326a7c9433ed498142d734/69a8af2d53326a7c9433ed498142d734.13.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/03/09/41/030941726a74595bebb74b275f920cd2/030941726a74595bebb74b275f920cd2.14.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/af/fd/5a/affd5a797441467e07b43d2b61318372/affd5a797441467e07b43d2b61318372.15.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/cb/ae/1d/cbae1d9c59a31aa0478940525225d43c/cbae1d9c59a31aa0478940525225d43c.9.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/56/1f/b5/561fb55c2d6e7a56addd077b0fbd22f3/561fb55c2d6e7a56addd077b0fbd22f3.12.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/2a/4d/03/2a4d03d5382599aca47fe6ac5311c8b9/2a4d03d5382599aca47fe6ac5311c8b9.26.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/19/8a/d0/198ad0346c76ddebe000fa2989bd8d22/198ad0346c76ddebe000fa2989bd8d22.3.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/00/d3/14/00d314e857b4dafb106c74f0a48f014f/00d314e857b4dafb106c74f0a48f014f.2.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/a9/b5/62/a9b5621e7bce71ab2cbab736fd56485c/a9b5621e7bce71ab2cbab736fd56485c.5.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/76/7f/a7/767fa7ab5874f9f27646b958643b9e5b/767fa7ab5874f9f27646b958643b9e5b.15.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/84/06/0f/84060fb2ef5f8104e71093445312854d/84060fb2ef5f8104e71093445312854d.30.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/e4/40/4b/e4404ba4dc26f438f464e57f3cda5cb0/e4404ba4dc26f438f464e57f3cda5cb0.5.jpg",
"https://img-l3.xnxx-cdn.com/videos/thumbs169xnxxll/31/63/f3/3163f306b90fdba0224737b298db7d40/3163f306b90fdba0224737b298db7d40.15.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/56/31/08/5631087ed60187106502342ed5f3ed31/5631087ed60187106502342ed5f3ed31.17.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/28/1a/58/281a588eeeeffd78eb15f7b75ebbbf5d/281a588eeeeffd78eb15f7b75ebbbf5d.19.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/31/ed/36/31ed36e62658e5d5a2b8b35592b8216d/31ed36e62658e5d5a2b8b35592b8216d.27.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/c5/06/df/c506df5970953508841973a78588cca7/c506df5970953508841973a78588cca7.8.jpg",
"https://img-hw.xnxx-cdn.com/videos/thumbs169xnxxll/63/d7/b2/63d7b225e4002116124a79cb6ccb3b9d/63d7b225e4002116124a79cb6ccb3b9d.5.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/51/f8/8f/51f88f9a4567a8a1e4929e2875411677/51f88f9a4567a8a1e4929e2875411677.5.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-online-video-porno-bibi-semok.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/skandal-istri-selingkuh-bokep-barat-terbaru.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-mertua-selingkuh-menantu-barat-viral.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/skandal-om-om-vs-istri-teman.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-terbaru-asia-vs-barat.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-abg-gratis-ngentot-selingkuhan.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-barat-hot-streaming-ngentot-tante.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/tante-sange-ngocok-memek-berujung-ngentot.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/ngentot-pelayan-hotel-bokep-barat-terbaru.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/nonton-bokep-smp-indo-terbaru.jpg",
"https://img-hw.xvideos-cdn.com/videos/thumbs169poster/ea/a2/39/eaa23903099bd9369bb008e89ce08c5a/eaa23903099bd9369bb008e89ce08c5a.1.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/streaming-bokep-jepang-tante-vs-keponakan.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-jepang-selingkuh-ngentot-sama-bibi.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-tante-semok-ngentot-squirt-banyak.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/video-bokep-mom-ngentot-anaknya.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-step-mom-ngentot-dikamar.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-sedarah-ngentot-ibu-tiri-di-dapur.jpg",
"http://96.43.139.236/wp-content/uploads/2020/12/bokep-skandal-seks-ngentot-mamah-muda.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokeb-Ukhty-Jamila-Ngentot-Di-Kamar-Hotel.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Abg-Indonesia-Dibooking-Bule-Amerika.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Abg-Ngentot-Dihotel-Teriak-Mendesah.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Abg-SMA-Colmek-Sampe-Basah-Squirt.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Barat-Sedarah-Ngentot-Sama-Ibu-Tiri.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Dihotel-Sodok-Memek-Pacar-Dari-Belakang.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Indo-Nikmatnya-Doggy-Style-Sama-Pacar.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Presenter-Uang-Kaget-Global-TV-Soraya-Rasyid.jpg",
"http://96.43.139.236/wp-content/uploads/2020/09/Bokep-Ngentot-Ukhtie-Berjilbab-Sambil-Live.jpg",
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxll/73/d1/02/73d1022e5debbd02c3cbe554e3668787/73d1022e5debbd02c3cbe554e3668787.2.jpg"
]