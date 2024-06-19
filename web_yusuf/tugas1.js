function calculate(){
let jarijari;
let tinggi;
let luas;
let volume;
const phi = 22/7;
jarijari = document.getElementById('jarijari').value;
tinggi = document.getElementById('tinggi').value;
luas = phi*jarijari**2;
volume = luas*tinggi;

document.getElementById("luas").value=luas;
document.getElementById("volume").value=volume
}