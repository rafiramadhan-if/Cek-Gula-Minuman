// ═══════════════════════════════════════════════════
// DATA MINUMAN
// ═══════════════════════════════════════════════════
const data = [
  // AIR MINERAL
  { name:"Aqua", brand:"Danone — Air Mineral", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Pilihan terbaik dan paling aman. Air mineral murni tanpa gula, kalori, atau bahan tambahan apapun." },
  { name:"Le Minerale", brand:"Mayora — Air Mineral", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Air mineral beroksigen dari Mayora. Bebas gula dan kalori, aman dikonsumsi tanpa batas." },
  { name:"Club", brand:"Tirta Investama — Air Mineral", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Air mineral kemasan yang aman sepenuhnya. Tidak ada kandungan gula maupun kalori." },
  { name:"VIT", brand:"Danone — Air Minum", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Air minum kemasan bebas gula. Alternatif terjangkau yang aman untuk diabetesi." },
  { name:"Cleo", brand:"Sariguna — Air Murni", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Air murni melalui proses ozonisasi. Bebas gula dan bebas kalori sepenuhnya." },
  { name:"Prima", brand:"Indofood — Air Mineral", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Air mineral kemasan dari Indofood. Bebas gula dan kalori, aman tanpa batas konsumsi." },
  { name:"Ades", brand:"Coca-Cola — Air Mineral", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"600ml", cat:"Air Mineral", desc:"Air mineral dari Coca-Cola Indonesia. Murni bebas gula dan kalori." },
  { name:"Evian", brand:"Danone — Air Mineral Import", icon:"💧", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"500ml", cat:"Air Mineral", desc:"Air mineral alami dari Prancis. Bebas gula dan aman untuk diabetesi." },

  // KOPI
  { name:"Nescafé Classic", brand:"Nestlé — Kopi Hitam", icon:"☕", bg:"#f5efe6", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"5 kkal", serving:"1 sachet (2g)", cat:"Kopi", desc:"Kopi hitam murni tanpa gula atau krimer. Aman selama tidak ditambah gula sendiri." },
  { name:"Nescafé Americano RTD", brand:"Nestlé — Kopi Hitam RTD", icon:"☕", bg:"#f5efe6", sugar:1, max:50, status:"safe", gi:"GI: 5", kal:"10 kkal", serving:"250ml", cat:"Kopi", desc:"Kopi hitam siap minum dengan kadar gula sangat rendah. Pilih varian Zero Sugar." },
  { name:"Kapal Api Special", brand:"Santos Jaya — Kopi Tubruk", icon:"☕", bg:"#f5efe6", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"5 kkal", serving:"7g bubuk", cat:"Kopi", desc:"Kopi tubruk murni tanpa gula. Aman selama diseduh tanpa tambahan gula." },
  { name:"Kopi Luwak", brand:"Indo Cafco — Kopi Arabika", icon:"☕", bg:"#f5efe6", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"5 kkal", serving:"7g bubuk", cat:"Kopi", desc:"Kopi premium tanpa tambahan gula. Aman untuk diabetesi selama disajikan tanpa pemanis." },
  { name:"Nescafé Less Sugar", brand:"Nestlé — Kurang Manis", icon:"☕", bg:"#eaf5ef", sugar:8, max:50, status:"caution", gi:"GI: 40", kal:"45 kkal", serving:"1 sachet", cat:"Kopi", desc:"Lebih rendah gula dari 3in1 biasa. Masih mengandung gula, tapi lebih aman dari versi original." },
  { name:"Kopiko 78°C", brand:"Mayora — Kopi RTD", icon:"☕", bg:"#fff4e6", sugar:13, max:50, status:"caution", gi:"GI: 52", kal:"65 kkal", serving:"240ml", cat:"Kopi", desc:"Kopi siap minum dengan kadar gula cukup tinggi. Konsumsi sesekali dengan porsi terbatas." },
  { name:"Nescafé 3in1", brand:"Nestlé — Kopi Susu Gula", icon:"☕", bg:"#fde8e8", sugar:16, max:50, status:"danger", gi:"GI: 58", kal:"80 kkal", serving:"1 sachet (19g)", cat:"Kopi", desc:"Kombinasi kopi, susu, dan gula dengan kadar gula tinggi. Ganti dengan Americano atau Less Sugar." },
  { name:"Good Day Cappuccino", brand:"Santos Jaya — Kopi Susu", icon:"☕", bg:"#fde8e8", sugar:22, max:50, status:"danger", gi:"GI: 65", kal:"100 kkal", serving:"1 sachet (25g)", cat:"Kopi", desc:"Campuran kopi, gula, dan krimer non-dairy sangat tinggi. Ganti dengan kopi hitam murni." },
  { name:"Good Day Freeze", brand:"Santos Jaya — Kopi Dingin", icon:"☕", bg:"#fde8e8", sugar:24, max:50, status:"danger", gi:"GI: 67", kal:"115 kkal", serving:"250ml", cat:"Kopi", desc:"Minuman kopi dingin kemasan dengan gula sangat tinggi. Hindari sepenuhnya." },
  { name:"Luwak White Koffie", brand:"Luwak — Kopi Putih", icon:"☕", bg:"#fde8e8", sugar:18, max:50, status:"danger", gi:"GI: 60", kal:"85 kkal", serving:"1 sachet (20g)", cat:"Kopi", desc:"White coffee dengan kandungan gula dan krimer tinggi. Tidak cocok untuk penderita diabetes." },
  { name:"Torabika Cappuccino", brand:"Torabika — Kopi Susu", icon:"☕", bg:"#fde8e8", sugar:19, max:50, status:"danger", gi:"GI: 62", kal:"90 kkal", serving:"1 sachet (25g)", cat:"Kopi", desc:"Kandungan gula dan krimer sangat tinggi. Beralih ke kopi hitam tanpa campuran apapun." },
  { name:"ABC Susu", brand:"ABC — Kopi Susu", icon:"☕", bg:"#fde8e8", sugar:20, max:50, status:"danger", gi:"GI: 63", kal:"95 kkal", serving:"1 sachet", cat:"Kopi", desc:"Kopi susu instan dengan kadar gula sangat tinggi. Hindari dan ganti dengan kopi hitam tanpa gula." },
  { name:"Goodday Frappuccino", brand:"Santos Jaya — Kopi Dingin", icon:"🧋", bg:"#fde8e8", sugar:28, max:50, status:"danger", gi:"GI: 68", kal:"130 kkal", serving:"250ml", cat:"Kopi", desc:"Minuman kopi dingin manis dengan kadar gula sangat tinggi. Tidak ada pilihan aman dari produk ini." },

  // TEH
  { name:"Teh Botol Sosro Zero", brand:"Sosro — Zero Sugar", icon:"🍵", bg:"#eaf5ef", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"350ml", cat:"Teh", desc:"Versi bebas gula dari Teh Botol Sosro. Rasa teh asli tanpa risiko lonjakan gula darah." },
  { name:"Teh Gelas Zero", brand:"Orang Tua Group — Zero Sugar", icon:"🍵", bg:"#eaf5ef", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"200ml", cat:"Teh", desc:"Versi bebas gula dari Teh Gelas. Pilihan aman dengan harga sangat terjangkau." },
  { name:"Nu Green Tea Original", brand:"ABC President — Teh Hijau", icon:"🍵", bg:"#eaf5ef", sugar:5, max:50, status:"safe", gi:"GI: 25", kal:"22 kkal", serving:"330ml", cat:"Teh", desc:"Teh hijau kemasan dengan kadar gula rendah. Kaya antioksidan baik untuk sensitivitas insulin." },
  { name:"Teh Pucuk Less Sugar", brand:"Mayora — Less Sugar", icon:"🍃", bg:"#eaf5ef", sugar:3, max:50, status:"safe", gi:"GI: 20", kal:"15 kkal", serving:"350ml", cat:"Teh", desc:"Varian less sugar dengan kadar gula jauh lebih rendah dari versi original. Pilihan tepat." },
  { name:"Teh Botol Sosro Original", brand:"Sosro — Original", icon:"🍵", bg:"#fff8e1", sugar:14, max:50, status:"caution", gi:"GI: 55", kal:"58 kkal", serving:"250ml", cat:"Teh", desc:"Teh asli dengan kadar gula cukup signifikan. Batasi maksimal setengah botol dan tidak tiap hari." },
  { name:"Teh Pucuk Original", brand:"Mayora — Original", icon:"🍃", bg:"#fff8e1", sugar:15, max:50, status:"caution", gi:"GI: 55", kal:"67 kkal", serving:"350ml", cat:"Teh", desc:"Kadar gula cukup tinggi. Beralih ke varian Less Sugar yang jauh lebih aman." },
  { name:"Frestea Green", brand:"Coca-Cola — Teh Hijau", icon:"🍵", bg:"#fff8e1", sugar:12, max:50, status:"caution", gi:"GI: 48", kal:"52 kkal", serving:"350ml", cat:"Teh", desc:"Teh hijau kemasan dengan gula sedang. Konsumsi sesekali masih ditoleransi, batasi frekuensinya." },
  { name:"Frestea Original", brand:"Coca-Cola — Teh Melati", icon:"🍵", bg:"#fff8e1", sugar:16, max:50, status:"caution", gi:"GI: 55", kal:"68 kkal", serving:"350ml", cat:"Teh", desc:"Teh melati dengan gula cukup tinggi. Pilih Frestea Green atau Teh Pucuk Less Sugar." },
  { name:"Lipton Ice Tea Lemon", brand:"Unilever — Teh Lemon", icon:"🍵", bg:"#fff8e1", sugar:14, max:50, status:"caution", gi:"GI: 52", kal:"58 kkal", serving:"250ml", cat:"Teh", desc:"Teh lemon dengan kandungan gula sedang. Pertimbangkan teh tanpa gula sebagai gantinya." },
  { name:"Nu Green Tea Madu", brand:"ABC President — Teh Hijau Madu", icon:"🍵", bg:"#fff4e6", sugar:18, max:50, status:"caution", gi:"GI: 55", kal:"75 kkal", serving:"330ml", cat:"Teh", desc:"Varian madu mengandung gula lebih tinggi. Pilih Nu Green Tea Original sebagai alternatif." },
  { name:"Ichitan Thai Tea", brand:"Ichitan — Thai Tea", icon:"🧋", bg:"#fde8e8", sugar:26, max:50, status:"danger", gi:"GI: 68", kal:"115 kkal", serving:"310ml", cat:"Teh", desc:"Thai tea dengan kadar gula sangat tinggi dari gula dan susu kental manis. Hindari." },
  { name:"Teh Gelas Original", brand:"Orang Tua Group — Teh Manis", icon:"🍵", bg:"#fde8e8", sugar:18, max:50, status:"danger", gi:"GI: 60", kal:"72 kkal", serving:"200ml", cat:"Teh", desc:"Teh cup plastik kecil dengan kadar gula sangat tinggi. Sangat tidak dianjurkan untuk diabetesi." },
  { name:"Teh Kotak Sosro", brand:"Sosro — Kotak 250ml", icon:"🍵", bg:"#fde8e8", sugar:17, max:50, status:"danger", gi:"GI: 62", kal:"68 kkal", serving:"250ml", cat:"Teh", desc:"Versi kotak dengan konsentrasi gula lebih tinggi dari botol. Pilih Teh Botol Sosro Zero." },
  { name:"Tekita Teh Manis", brand:"Rekso — Teh Manis", icon:"🍵", bg:"#fde8e8", sugar:19, max:50, status:"danger", gi:"GI: 62", kal:"78 kkal", serving:"350ml", cat:"Teh", desc:"Kadar gula sangat tinggi. Tidak disarankan untuk penderita diabetes." },

  // SUSU
  { name:"Indomilk UHT Plain", brand:"Indomilk — Susu Tawar", icon:"🥛", bg:"#f0f8ff", sugar:4.8, max:50, status:"safe", gi:"GI: 30", kal:"70 kkal", serving:"200ml", cat:"Susu", desc:"Susu UHT plain tanpa tambahan pemanis. Hanya laktosa alami. Aman 1 kotak per hari." },
  { name:"Ultra Low Fat Plain", brand:"Ultra — Low Fat", icon:"🥛", bg:"#eaf5ef", sugar:5, max:50, status:"safe", gi:"GI: 32", kal:"75 kkal", serving:"250ml", cat:"Susu", desc:"Susu rendah lemak tanpa gula tambahan. Pilihan terbaik dari lini Ultra untuk diabetesi." },
  { name:"Greenfields Full Cream", brand:"Greenfields — Susu Segar", icon:"🥛", bg:"#eaf5ef", sugar:4.5, max:50, status:"safe", gi:"GI: 30", kal:"125 kkal", serving:"250ml", cat:"Susu", desc:"Susu segar UHT tanpa tambahan gula. Laktosa alami dalam jumlah normal masih aman." },
  { name:"Diabetasol", brand:"Kalbe — Susu Diabetes", icon:"🥛", bg:"#eaf5ef", sugar:3, max:50, status:"safe", gi:"GI: 28", kal:"180 kkal", serving:"200ml", cat:"Susu", desc:"Susu formula khusus diabetesi dengan GI rendah. Sangat direkomendasikan sebagai pengganti susu biasa." },
  { name:"Glucerna", brand:"Abbott — Nutrisi Diabetes", icon:"🥛", bg:"#eaf5ef", sugar:4, max:50, status:"safe", gi:"GI: 30", kal:"200 kkal", serving:"237ml", cat:"Susu", desc:"Formula nutrisi khusus diabetesi dari Abbott. Mengandung karbohidrat lambat untuk kontrol gula optimal." },
  { name:"Bear Brand Gold", brand:"Nestlé — Susu Steril", icon:"🥛", bg:"#fff4e6", sugar:11, max:50, status:"caution", gi:"GI: 42", kal:"140 kkal", serving:"189ml", cat:"Susu", desc:"Bergizi namun mengandung gula tambahan. Maksimal 1 kaleng per hari masih bisa ditoleransi." },
  { name:"Indomilk Full Cream", brand:"Indomilk — Full Cream", icon:"🥛", bg:"#fff4e6", sugar:10, max:50, status:"caution", gi:"GI: 40", kal:"130 kkal", serving:"200ml", cat:"Susu", desc:"Lemak dan gula lebih tinggi dari versi plain. Konsumsi tidak lebih dari 1 kotak per hari." },
  { name:"Frisian Flag Full Cream", brand:"Frisian Flag — Full Cream", icon:"🥛", bg:"#fff4e6", sugar:11, max:50, status:"caution", gi:"GI: 42", kal:"135 kkal", serving:"200ml", cat:"Susu", desc:"Kandungan lemak dan gula cukup tinggi. Pilih varian plain atau low fat sebagai gantinya." },
  { name:"Yakult", brand:"Yakult — Probiotik", icon:"🧪", bg:"#fff4e6", sugar:11, max:50, status:"caution", gi:"GI: 46", kal:"50 kkal", serving:"65ml", cat:"Susu", desc:"Baik untuk pencernaan namun kadar gula per botol kecilnya cukup tinggi. Batasi 1 botol/hari." },
  { name:"Cimory Yoghurt Drink", brand:"Cimory — Yoghurt Cair", icon:"🥛", bg:"#fff4e6", sugar:14, max:50, status:"caution", gi:"GI: 48", kal:"100 kkal", serving:"250ml", cat:"Susu", desc:"Yoghurt cair dengan probiotik baik namun mengandung gula tambahan cukup. Batasi porsinya." },
  { name:"Dancow Full Cream", brand:"Nestlé — Susu Bubuk", icon:"🥛", bg:"#fff4e6", sugar:11, max:50, status:"caution", gi:"GI: 42", kal:"145 kkal", serving:"200ml", cat:"Susu", desc:"Susu bubuk dengan sedikit gula tambahan. Konsumsi secukupnya dan tidak setiap hari." },
  { name:"Milo RTD", brand:"Nestlé — Minuman Cokelat", icon:"🍫", bg:"#fde8e8", sugar:18, max:50, status:"danger", gi:"GI: 55", kal:"130 kkal", serving:"200ml", cat:"Susu", desc:"Meski mengandung malt dan nutrisi, kadar gulanya tetap sangat tinggi. Hindari." },
  { name:"Indomilk Cokelat", brand:"Indomilk — Chocolate", icon:"🍫", bg:"#fde8e8", sugar:21, max:50, status:"danger", gi:"GI: 60", kal:"160 kkal", serving:"200ml", cat:"Susu", desc:"Tambahan cokelat dan gula sangat berbahaya. Pilih Indomilk Plain sebagai alternatif." },
  { name:"Ultra Cokelat", brand:"Ultra — Chocolate", icon:"🍫", bg:"#fde8e8", sugar:23, max:50, status:"danger", gi:"GI: 62", kal:"170 kkal", serving:"250ml", cat:"Susu", desc:"Gula dari cokelat dan pemanis tambahan sangat tinggi. Ganti dengan Ultra Plain." },
  { name:"Frisian Flag Cokelat", brand:"Frisian Flag — Chocolate", icon:"🍫", bg:"#fde8e8", sugar:22, max:50, status:"danger", gi:"GI: 61", kal:"165 kkal", serving:"200ml", cat:"Susu", desc:"Kandungan gula dari cokelat sangat tinggi. Tidak dianjurkan untuk penderita diabetes." },
  { name:"Indomilk Kental Manis", brand:"Indomilk — Susu Kental", icon:"🥛", bg:"#fde8e8", sugar:38, max:50, status:"danger", gi:"GI: 75", kal:"130 kkal", serving:"40ml (2 sdm)", cat:"Susu", desc:"Kandungan gula tertinggi di antara produk susu. Hindari penambahan ke minuman apapun." },
  { name:"Hilo Teen", brand:"Kalbe — Susu Remaja", icon:"🥛", bg:"#fde8e8", sugar:18, max:50, status:"danger", gi:"GI: 55", kal:"180 kkal", serving:"250ml", cat:"Susu", desc:"Gula tambahan tinggi untuk segmen remaja. Tidak disarankan untuk penderita diabetes muda." },

  // SODA
   { name:"Chi Forest Sparkling White Peach", brand:"Chi Forest — Sparkling Water", icon:"🍑", bg:"#fce8f3", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"330ml", cat:"Soda", desc:"Sparkling water rasa white peach bebas gula menggunakan pemanis alami eritritol. 0 gula, 0 kalori, 0 lemak. Sangat aman untuk penderita diabetes." },
  { name:"Chi Forest Sparkling Lychee Fizzy", brand:"Chi Forest — Sparkling Water", icon:"🍈", bg:"#fce8f3", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"330ml", cat:"Soda", desc:"Sparkling water rasa lychee bebas gula. Menggunakan eritritol sebagai pemanis alami. Pilihan soda aman terbaik untuk diabetesi." },
  { name:"Chi Forest Sparkling Grape Delight", brand:"Chi Forest — Sparkling Water", icon:"🍇", bg:"#f3e8fc", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"330ml", cat:"Soda", desc:"Sparkling water rasa anggur bebas gula dengan eritritol dan sukralosa. Tidak mempengaruhi kadar gula darah sama sekali." },
  { name:"Chi Forest Sparkling Calamansi Lime", brand:"Chi Forest — Sparkling Water", icon:"🍋", bg:"#eafce8", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"330ml", cat:"Soda", desc:"Sparkling water rasa jeruk kalamansi bebas gula. Segar dan asam alami tanpa risiko lonjakan gula darah." },
  { name:"Chi Forest Sparkling Green Apple", brand:"Chi Forest — Sparkling Water", icon:"🍏", bg:"#eafce8", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"330ml", cat:"Soda", desc:"Sparkling water rasa apel hijau bebas gula. Kesegaran khas apel tanpa kandungan gula sama sekali." },
  { name:"Chi Forest Oolong Tea", brand:"Chi Forest — Teh Oolong", icon:"🍵", bg:"#fce8f3", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"0 kkal", serving:"500ml", cat:"Soda", desc:"Teh oolong kemasan bebas gula dari Chi Forest. Kaya antioksidan dan aman sepenuhnya untuk penderita diabetes." },
  { name:"Chi Forest Burn", brand:"Chi Forest — Minuman Olahraga", icon:"🔥", bg:"#fff0e8", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"5 kkal", serving:"500ml", cat:"Soda", desc:"Minuman olahraga bebas gula dari Chi Forest dengan elektrolit dan kafein. Aman untuk aktivitas fisik ringan hingga sedang." },
  { name:"Coca-Cola Zero Sugar", brand:"Coca-Cola — Zero Sugar", icon:"🥤", bg:"#fff4e6", sugar:0, max:50, status:"caution", gi:"GI: 0", kal:"1 kkal", serving:"250ml", cat:"Soda", desc:"Bebas gula tetapi menggunakan pemanis buatan aspartam. Boleh sesekali, tidak rutin." },
  { name:"Pepsi Black", brand:"PepsiCo — Zero Sugar", icon:"🥤", bg:"#fff4e6", sugar:0, max:50, status:"caution", gi:"GI: 0", kal:"1 kkal", serving:"250ml", cat:"Soda", desc:"Bebas gula dengan pemanis buatan. Boleh sesekali tapi tidak disarankan dikonsumsi rutin." },
  { name:"Coca-Cola Original", brand:"Coca-Cola — Soda", icon:"🥤", bg:"#fde8e8", sugar:27, max:50, status:"danger", gi:"GI: 63", kal:"105 kkal", serving:"250ml", cat:"Soda", desc:"Salah satu minuman paling berbahaya untuk diabetesi. Kadar gula sangat tinggi tanpa nilai gizi." },
  { name:"Fanta Strawberry", brand:"Coca-Cola — Soda Rasa Buah", icon:"🥤", bg:"#fde8e8", sugar:28, max:50, status:"danger", gi:"GI: 68", kal:"112 kkal", serving:"250ml", cat:"Soda", desc:"Lebih banyak gula dari Coca-Cola ditambah pewarna buatan. Tidak ada manfaat gizi apapun." },
  { name:"Sprite Original", brand:"Coca-Cola — Soda Lemon", icon:"🥤", bg:"#fde8e8", sugar:26, max:50, status:"danger", gi:"GI: 60", kal:"100 kkal", serving:"250ml", cat:"Soda", desc:"Meski terasa ringan, kandungan gulanya hampir sama dengan cola. Tetap sangat berbahaya." },
  { name:"Pepsi Cola", brand:"PepsiCo — Soda", icon:"🥤", bg:"#fde8e8", sugar:27, max:50, status:"danger", gi:"GI: 64", kal:"108 kkal", serving:"250ml", cat:"Soda", desc:"Kandungan gula setara Coca-Cola. Sama berbahayanya untuk penderita diabetes." },
  { name:"A&W Root Beer", brand:"A&W — Root Beer", icon:"🥤", bg:"#fde8e8", sugar:26, max:50, status:"danger", gi:"GI: 60", kal:"103 kkal", serving:"250ml", cat:"Soda", desc:"Root beer dengan kadar gula sangat tinggi. Tidak ada perbedaan risiko dengan soda lainnya." },
  { name:"Schweppes Tonic Water", brand:"Coca-Cola — Tonic Water", icon:"🥤", bg:"#fde8e8", sugar:20, max:50, status:"danger", gi:"GI: 58", kal:"80 kkal", serving:"250ml", cat:"Soda", desc:"Meski rasanya pahit, tonic water mengandung gula cukup tinggi. Bukan pilihan aman." },
  { name:"Big Cola", brand:"Aje Group — Cola", icon:"🥤", bg:"#fde8e8", sugar:25, max:50, status:"danger", gi:"GI: 62", kal:"98 kkal", serving:"250ml", cat:"Soda", desc:"Cola dengan kadar gula tinggi. Sama berbahayanya dengan cola merek lain." },
  { name:"Fanta Melon", brand:"Coca-Cola — Soda Melon", icon:"🥤", bg:"#fde8e8", sugar:28, max:50, status:"danger", gi:"GI: 67", kal:"112 kkal", serving:"250ml", cat:"Soda", desc:"Soda rasa melon dengan kadar gula sangat tinggi dan pewarna buatan. Hindari sepenuhnya." },
 
  // JUS & BUAH
  { name:"Tropicana Slim Jus", brand:"Nutrifood — Jus Diabetes", icon:"🍊", bg:"#eaf5ef", sugar:2, max:50, status:"safe", gi:"GI: 22", kal:"12 kkal", serving:"250ml", cat:"Jus & Buah", desc:"Jus buah khusus diabetesi dengan pemanis stevia. Pilihan jus kemasan terbaik yang ada." },
  { name:"Minute Maid Pulpy Orange", brand:"Coca-Cola — Jus Jeruk", icon:"🍊", bg:"#fde8e8", sugar:24, max:50, status:"danger", gi:"GI: 55", kal:"120 kkal", serving:"300ml", cat:"Jus & Buah", desc:"Meski mengandung buah asli, gula tambahannya sangat tinggi. Jauh lebih baik makan jeruk langsung." },
  { name:"Buavita Jeruk", brand:"Unilever — Jus Jeruk", icon:"🍊", bg:"#fde8e8", sugar:22, max:50, status:"danger", gi:"GI: 52", kal:"110 kkal", serving:"250ml", cat:"Jus & Buah", desc:"Jus kemasan dengan gula tambahan tinggi. Buat jus sendiri tanpa tambahan gula sebagai gantinya." },
  { name:"Buavita Jambu", brand:"Unilever — Jus Jambu", icon:"🍈", bg:"#fde8e8", sugar:20, max:50, status:"danger", gi:"GI: 50", kal:"100 kkal", serving:"250ml", cat:"Jus & Buah", desc:"Kadar gula tinggi dari campuran buah dan pemanis tambahan. Tidak dianjurkan." },
  { name:"Ale-Ale Jeruk", brand:"Kino — Minuman Buah", icon:"🍊", bg:"#fde8e8", sugar:23, max:50, status:"danger", gi:"GI: 55", kal:"98 kkal", serving:"350ml", cat:"Jus & Buah", desc:"Minuman rasa buah dengan gula sangat tinggi dan kandungan buah asli yang sangat sedikit." },
  { name:"Ale-Ale Mangga", brand:"Kino — Minuman Buah", icon:"🥭", bg:"#fde8e8", sugar:24, max:50, status:"danger", gi:"GI: 57", kal:"102 kkal", serving:"350ml", cat:"Jus & Buah", desc:"Minuman rasa mangga kemasan dengan kandungan gula sangat tinggi. Hindari sepenuhnya." },
  { name:"Floridina Jeruk", brand:"Santos Jaya — Minuman Jeruk", icon:"🍊", bg:"#fde8e8", sugar:21, max:50, status:"danger", gi:"GI: 53", kal:"95 kkal", serving:"350ml", cat:"Jus & Buah", desc:"Kadar gula tinggi meski mengandung vitamin C. Risikonya tetap tinggi untuk diabetesi." },
  { name:"Sunquick", brand:"Royal Unibrew — Konsentrat", icon:"🍊", bg:"#fde8e8", sugar:28, max:50, status:"danger", gi:"GI: 60", kal:"112 kkal", serving:"250ml dicairkan", cat:"Jus & Buah", desc:"Konsentrat buah dengan kadar gula sangat tinggi bahkan setelah diencerkan. Tidak aman." },

  // ISOTONIK
  { name:"Pocari Sweat Zero", brand:"Otsuka — Isotonik Zero", icon:"🩵", bg:"#e8f4fd", sugar:0, max:50, status:"safe", gi:"GI: 0", kal:"5 kkal", serving:"500ml", cat:"Isotonik", desc:"Minuman isotonik bebas gula dengan elektrolit lengkap. Cocok saat olahraga ringan." },
  { name:"Pocari Sweat Original", brand:"Otsuka — Isotonik", icon:"🩵", bg:"#fff4e6", sugar:12, max:50, status:"caution", gi:"GI: 55", kal:"55 kkal", serving:"500ml", cat:"Isotonik", desc:"Minuman isotonik dengan gula untuk ganti energi. Hanya saat olahraga intensitas sedang-tinggi." },
  { name:"Mizone", brand:"Danone — Air Beraroma", icon:"💧", bg:"#fff4e6", sugar:10, max:50, status:"caution", gi:"GI: 50", kal:"40 kkal", serving:"500ml", cat:"Isotonik", desc:"Jauh lebih baik dari soda, namun kadar gulanya tidak bisa diabaikan." },
  { name:"Gatorade", brand:"PepsiCo — Sports Drink", icon:"⚡", bg:"#fff4e6", sugar:14, max:50, status:"caution", gi:"GI: 58", kal:"60 kkal", serving:"500ml", cat:"Isotonik", desc:"Untuk atlet aktif. Konsumsi hanya saat olahraga berat, bukan minuman harian." },
  { name:"Hydro Coco", brand:"Kalbe — Air Kelapa", icon:"🥥", bg:"#fff4e6", sugar:9, max:50, status:"caution", gi:"GI: 48", kal:"48 kkal", serving:"310ml", cat:"Isotonik", desc:"Air kelapa kemasan dengan elektrolit alami. Kadar gula sedang, maksimal 1 botol/hari." },
  { name:"Ener-G", brand:"Bintang Toedjoe — Isotonik", icon:"⚡", bg:"#fde8e8", sugar:16, max:50, status:"danger", gi:"GI: 58", kal:"70 kkal", serving:"300ml", cat:"Isotonik", desc:"Kadar gula terlalu tinggi untuk penderita diabetes. Ganti dengan Pocari Zero." },

  // ENERGI
  { name:"Kratingdaeng", brand:"T.C. Pharmaceutical — Energy", icon:"🐂", bg:"#fde8e8", sugar:26, max:50, status:"danger", gi:"GI: 68", kal:"110 kkal", serving:"250ml", cat:"Energi", desc:"Gula tinggi + kafein berlebih = lonjakan gula darah drastis. Hindari sepenuhnya." },
  { name:"Hemaviton Energy Drink", brand:"Tempo — Energy Drink", icon:"⚡", bg:"#fde8e8", sugar:24, max:50, status:"danger", gi:"GI: 65", kal:"105 kkal", serving:"150ml", cat:"Energi", desc:"Kadar gula dan kafein sangat tinggi dalam kemasan kecil. Sangat berbahaya untuk diabetesi." },
  { name:"M-150", brand:"Osotspa — Energy Drink", icon:"⚡", bg:"#fde8e8", sugar:22, max:50, status:"danger", gi:"GI: 64", kal:"98 kkal", serving:"150ml", cat:"Energi", desc:"Energy drink impor dengan gula sangat tinggi. Tidak ada alasan aman untuk dikonsumsi diabetesi." },
  { name:"Warrior Energy", brand:"Sido Muncul — Energy", icon:"⚡", bg:"#fde8e8", sugar:20, max:50, status:"danger", gi:"GI: 62", kal:"90 kkal", serving:"150ml", cat:"Energi", desc:"Kadar gula tinggi dikombinasikan dengan stimulan. Sangat tidak dianjurkan." },
  { name:"Extra Joss Sachet", brand:"Bintang Toedjoe — Energy", icon:"⚡", bg:"#fff4e6", sugar:0, max:50, status:"caution", gi:"GI: 5", kal:"10 kkal", serving:"1 sachet", cat:"Energi", desc:"Hampir bebas gula, namun kandungan kafein dan taurin tinggi tetap perlu diwaspadai." },

  // SERBUK
  { name:"Tropicana Slim Sachet", brand:"Nutrifood — Minuman Diabetes", icon:"🍊", bg:"#eaf5ef", sugar:1, max:50, status:"safe", gi:"GI: 12", kal:"10 kkal", serving:"1 sachet", cat:"Serbuk", desc:"Minuman serbuk khusus diabetesi dengan pemanis stevia. Sangat direkomendasikan." },
  { name:"Nutrisari", brand:"Nutrifood — Serbuk Vitamin C", icon:"🧃", bg:"#fde8e8", sugar:24, max:50, status:"danger", gi:"GI: 70", kal:"95 kkal", serving:"1 sachet", cat:"Serbuk", desc:"Hampir seluruhnya adalah gula dan perisa buatan. Vitamin C-nya tidak sepadan dengan risikonya." },
  { name:"Marimas", brand:"Marimas — Minuman Serbuk", icon:"🧃", bg:"#fde8e8", sugar:25, max:50, status:"danger", gi:"GI: 72", kal:"98 kkal", serving:"1 sachet", cat:"Serbuk", desc:"Gula sebagai bahan utama. Tidak ada nilai gizi berarti. Sangat berbahaya." },
  { name:"Segar Sari", brand:"Indofood — Minuman Serbuk", icon:"🧃", bg:"#fde8e8", sugar:23, max:50, status:"danger", gi:"GI: 68", kal:"90 kkal", serving:"1 sachet", cat:"Serbuk", desc:"Komposisi utama adalah gula dan pewarna. Hindari sepenuhnya." },
  { name:"Pop Ice", brand:"Forisa — Minuman Dingin", icon:"🧃", bg:"#fde8e8", sugar:22, max:50, status:"danger", gi:"GI: 65", kal:"88 kkal", serving:"1 sachet", cat:"Serbuk", desc:"Serbuk minuman dingin dengan gula sangat tinggi. Tidak ada versi yang aman." },
  { name:"Jahe Wangi", brand:"Sido Muncul — Jahe Instan", icon:"🫚", bg:"#fff4e6", sugar:16, max:50, status:"caution", gi:"GI: 52", kal:"68 kkal", serving:"1 sachet", cat:"Serbuk", desc:"Minuman jahe instan mengandung gula cukup tinggi. Buat jahe sendiri tanpa gula lebih sehat." },

  // KHUSUS DIABETES
  { name:"Ensure", brand:"Abbott — Nutrisi Lengkap", icon:"🥛", bg:"#fff4e6", sugar:9, max:50, status:"caution", gi:"GI: 40", kal:"220 kkal", serving:"237ml", cat:"Khusus Diabetes", desc:"Susu nutrisi lengkap dengan kandungan gula sedang. Perlu diperhitungkan dalam total asupan gula harian." },
  { name:"Pediasure", brand:"Abbott — Nutrisi Anak", icon:"🥛", bg:"#fde8e8", sugar:14, max:50, status:"danger", gi:"GI: 48", kal:"240 kkal", serving:"237ml", cat:"Khusus Diabetes", desc:"Formula anak dengan gula cukup tinggi. Konsultasikan dengan dokter jika anak menderita diabetes." },
];

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
let activeFilter = 'all';
let activeCat = 'all';

// ═══════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════
const fillColor = s => s === 'safe' ? '#1e6b41' : s === 'caution' ? '#9a4f00' : '#b91c1c';
const badgeLabel = s => s === 'safe' ? '✓ Aman' : s === 'caution' ? '⚠ Hati-hati' : '✕ Hindari';

// ═══════════════════════════════════════════════════
// UPDATE STATS
// ═══════════════════════════════════════════════════
function updateStats() {
  document.getElementById('totalCount').textContent = data.length;
  document.getElementById('safeCount').textContent = data.filter(d => d.status === 'safe').length;
  document.getElementById('cautionCount').textContent = data.filter(d => d.status === 'caution').length;
  document.getElementById('dangerCount').textContent = data.filter(d => d.status === 'danger').length;
}

// ═══════════════════════════════════════════════════
// BUILD CATEGORY BUTTONS
// ═══════════════════════════════════════════════════
function buildCats() {
  const cats = ['all', ...new Set(data.map(d => d.cat))];
  const bar = document.getElementById('catBar');

  cats.forEach(c => {
    const b = document.createElement('button');
    b.className = 'cbtn' + (c === 'all' ? ' active' : '');
    b.textContent = c === 'all' ? 'Semua Kategori' : c;
    b.onclick = () => {
      activeCat = c;
      document.querySelectorAll('.cbtn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      render();
    };
    bar.appendChild(b);
  });
}

// ═══════════════════════════════════════════════════
// RENDER CARDS
// ═══════════════════════════════════════════════════
function render() {
  const q    = document.getElementById('q').value.toLowerCase().trim();
  const grid = document.getElementById('grid');
  const emp  = document.getElementById('empty');
  const rc   = document.getElementById('resultCount');

  let list = [...data];
  if (activeFilter !== 'all') list = list.filter(d => d.status === activeFilter);
  if (activeCat !== 'all')    list = list.filter(d => d.cat === activeCat);
  if (q) list = list.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.brand.toLowerCase().includes(q) ||
    d.desc.toLowerCase().includes(q) ||
    d.cat.toLowerCase().includes(q)
  );

  grid.innerHTML = '';

  if (!list.length) {
    emp.style.display = 'block';
    rc.innerHTML = '';
    return;
  }

  emp.style.display = 'none';
  rc.innerHTML = `Menampilkan <strong>${list.length}</strong> dari ${data.length} minuman`;

  list.forEach((d, i) => {
    const pct  = Math.min(Math.round((d.sugar / d.max) * 100), 100);
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (i * 0.025) + 's';
    card.innerHTML = `
      <div class="stripe ${d.status}"></div>
      <div class="card-head">
        <div class="icon-box" style="background:${d.bg}">${d.icon}</div>
        <div>
          <div class="drink-name">${d.name}</div>
          <div class="drink-brand">${d.brand}</div>
          <span class="drink-cat">${d.cat}</span>
        </div>
      </div>
      <div class="card-body">
        <span class="badge ${d.status}">${badgeLabel(d.status)}</span>
        <div class="sugar-row">
          <span>Kadar Gula</span>
          <span class="sugar-val">${d.sugar}g / sajian</span>
        </div>
        <div class="track">
          <div class="fill" style="width:${pct}%;background:${fillColor(d.status)}"></div>
        </div>
        <p class="desc">${d.desc}</p>
        <div class="chips">
          <span class="chip">${d.gi}</span>
          <span class="chip">${d.kal}</span>
          <span class="chip">${d.serving}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════
// SET STATUS FILTER
// ═══════════════════════════════════════════════════
function setF(type, btn) {
  activeFilter = type;
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
updateStats();
buildCats();
render();
