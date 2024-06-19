function calculate(){
    let namapenumpang;
    let tujuan;
    let kelas;
    let jarak;
    let beratbagasi;
    let hargatiket;
    let totalbayartiket;
    const a= 10000;
    const b= 5000;
    const c= 50000;
    tujuan=parseFloat(document.getElementById("tujuan".value));
    kelas=parseFloat(document.getSelection("kelas".value));
    beratbagasi=parseFloat(document.getElementById("beratbagasi".value));
    hts=hargatiket*jarak
    
    if (kelas=="ekonomi"){
        hargatiket=hts;
    }

    if (kelas="bisnis"){
        hargatiket=hargatiket+(hts*0.15);
    }
    if (kelas="vip"){
        hargatiket=hargatiket+(hts*0,25);
    }

    beratbagasi=b*jarak;
    hargatiket=a;
    totalbayartiket=c+jarak;

    document.getElementById("hargatiket").value=hargatiket;
    document.getElementById("totalbayartiket").value=totalbayartiket;
}
