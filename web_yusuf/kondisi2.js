let nilai1=parseInt(prompt("masukan nilai1"));
let nilai2=parseInt(prompt("masukan nilai2"));
let nilai3=parseInt(prompt("masukan nilai3"));
let nilai4=parseInt(prompt("masukan nilai4"));
let ratarata=(nilai1+nilai2+nilai3+nilai4)/4;

if (ratarata>=90){
    nilai_huruf='A';
}
else if(ratarata>=80){
    nilai_huruf='B';
}
else if(ratarata>70){ 
    nilai_huruf='c';
}
else{
    nilai_huruf='D';
}
document.write("Nilai:"+nilai_huruf+"<br>");
document.write(+ratarata);
