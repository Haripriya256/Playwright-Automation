class car{
    //name="Swift";
    //colour="Black";
    //model="2026";
    //varient="Base";

    constructor(model,varient,colour){
        this.model=model;
        this.varient=varient;
        this.colour=colour;
        this.carname="Swift";

    }

    details(){
        //console.log(this.name);
        console.log(this.model);
        //console.log(this.colour);
        console.log(this.varient);
    }
}

let car1=new car(2026, "Base","Black");
console.log(car1);
//car1.details();

let car2=new car(2026, "Top","White");
console.log(car2);
//car2.details();