function Calculate(){
    let t1=document.getElementById("actualamount"); //actual amount
    let t2=document.getElementById("percentage");   //percentage
    let t3=document.getElementById("Tip Amount");   // tip amount
    let t4=document.getElementById("Bill Amount");  //bill amount


    if (t1.value && t2.value === ""){
        alert("Enter amount and tip propelry")
    }

    let tipAmount = parseInt(t1.value) * parseInt(t2.value) / 100;
    t3.value = tipAmount;
    t4.value = parseInt(t1.value) + tipAmount;
}

