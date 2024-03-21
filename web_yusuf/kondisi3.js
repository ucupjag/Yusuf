let JB=parseInt(prompt("jumlah beli: "));
if (JB>1000000){
    diskon="10%";
}
else if (JB>=5000000){
    diskon="5%";
}
else{
    diskon="0%"
}
document.write("diskon : "+diskon+"<br>")
document.write(JB);