function calculate(){
    let masakerja;
    let gajipokok;
    let bonus;
    let pajak;
    let gajibersih; 
    const ump=3000000;
    masakerja=parseFloat(document.getElementById("masakerja").value);
    gajipokok=ump+(0,1*ump*masakerja);
    document.getElementById("gajipokok").value=gajipokok;

    bonus = gajitotal*0.005;
    document.getElementById("bonus").value=bonus;

    let gajitotal=(gajipokok+bonus)*12;
    let persenpajak;
    if (gajipokok>=5000000000){
        persenpajak=0,3;
    }
    else if (gajitotal>=250000000){
        persenpajak=0,25;
    }
    else if (gajitotal>=500000000){
        persenpajak=0,15;
    }
    else{
        persenpajak=0;
    }
    pajak=(gajitotal*persenpajak)/12;
    document.getElementById("pajak").value=pajak;
    
} 

