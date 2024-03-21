var jabatan=prompt("masukan kelas tiket(vvip,vip,bisnis,atau ekonomi:");
var hargatiket;
switch (kelas) {
    case "vvip":
        hargatiket=10000000;
        break;
    case "vip":
        hargatiket=750000;
        break;
    case "bisnis":
        hargatiket=500000;
        break;
    case "ekonomi":
        hargatiket=350000
        break;
    default:
        hargatiket="kelas tidak valid";
}
document.write("jadi harga tiket"+kelas+"adalah"+hargatiket);




