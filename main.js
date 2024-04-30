
let number1 = +prompt("  birinchi  son kiriting ") 
let number2 = +prompt(" ikkinchi  son kiriting")
let amal = +prompt("amalni talang " + "\n.1.qoshish " + "\n.2.ayirish " + "\n.3.kopaytirish " +"\n.4.bolish " + "\n.amalni talang: (1/2/3/4); ")
let sum;
if (amal === 1) {
    sum = number1 + number2;
    console.log(sum);
}else  if(amal === 2){
    sum = number1 - number2;
    console.log(sum);
}if (amal === 3) {
    sum = number1 * number2;
    console.log(sum);
}else  if(amal === 4){
    sum = number1 / number2;
    console.log(sum);
}

