function payment(callback,details){
    console.log("Select payment options");
    // callback(79900);
    // callback(700);
    // callback(900);
    callback(details); //cash(5000) //upi(678977)
    
}

function upi(upiID){
    console.log(upiID);
     console.log("Paid by upi");
}

function card(cardNo){
    console.log(cardNo)
    console.log("Paid by card");

}

function cash(amount){
 console.log(amount);
 console.log("Paid by cash");
}

//payment(cash)
// payment(()=>{});
// payment(()=>{console.log("No call back");});
//payment([upi,card,cash]);

// payment(cash,5000);
// payment(upi,'689900');

// payment(()=>{cash(500);
//     card(765899909);
// });