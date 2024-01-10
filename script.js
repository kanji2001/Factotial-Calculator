
function factorial() {
    let number = parseInt(document.getElementById("Factotial").value);

    let txt = 1;
    if (number == 0 ){
        txt = (`The factorial of ${number} is 1`)
        // console.log(`The factorial of ${number} is 1`);

    }else if (number < 0){
        txt = (`The factorial of negative number is not possible`)
       
    }else {
        for (var i=1; i<=number;i++){
            txt = txt * i;
        } 
    }
    document.getElementById("fact").innerText = `The Factorial of ${number} is :` + txt;
}
