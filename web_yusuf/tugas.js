let total = 0;

for (let i = 1;i <= 3; i++){
    let input=parseFloat(prompt("masukan data ke-"+i+":"));
    total+= input;
}
let ratarata = total / 3;
alert("rrata rata dari 3 data input adalah: " + ratarata);
