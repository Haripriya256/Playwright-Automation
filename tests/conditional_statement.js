//if
let price=5001;

if(price>5000){
    price -=500;
}

console.log(price);

// if else
let mark=67;

if(mark>=35){
    console.log("PASS");
}else{
    console.log("FAIL");
}

//if-else if-else if-else

let totalPrice=2500;

if(totalPrice>=5000){
    totalPrice -=500;  //totalPrice=totalPrice-100
}
else if(totalPrice>=4000){
    totalPrice -=400;
}
else if(totalPrice>=3000){
 totalPrice -=300;
}
else if(totalPrice>=2000){
 totalPrice -=200;
}

console.log(totalPrice);

// nested if

let marks=67;

if(marks>=35){
    console.log("PASS");
    if(mark>=90){
         console.log("Grade A");
    }
    else if(mark>=80){

     console.log("Grade B");
    }
    else if(mark>=70){
        console.log("Grade C");
    }
}

else{
    console.log("FAIL");
}

//switch case

let cop="Apply100";

let amount=5000;

switch(cop){
    case "Apply500":
    amount -=500;
    break;
    case "FirstUser":
        amount -=100;
        break;
    case "Apply100":
        amount -=100;
        break;
    default:
        console.log("Invalid code")
}

console.log(amount);