function a(callback){
    console.log('a');
}

function b(callback){
    console.log('b');
}

function c(callback){
    console.log('c');
}

function d(){
    console.log('d');
}

a(()=>{
    b(()=>{
    c(d)
    })

})