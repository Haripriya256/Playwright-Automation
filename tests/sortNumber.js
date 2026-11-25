let num=[20,40,70,90,60,80,10,30,100,50];

let temp=[];

for(let i=0;i<num.length;i++){

    for(let j=0;j<num.length;j++){
        if(num[i]<num[j]){
            temp=num[i];
            num[i]=num[j];
            num[j]=temp;
        }

    }
}

for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

//20<40