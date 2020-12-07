//fumctions are used to perform a specific task

//function functionName(arg1,arg2,arg3,...,argn){
//    function definition;
//}
function add(num1,num2){
    let res=num1+num2;
    console.log(res)
}
//function calling by using function name

add(10,20)
function sub(num1,num2){
    let res=num1-num2;
    console.log(res)
}
sub(500,200)
//create functions for perform various arithmetic 
//mul,div,modulus,power

function mul(num1,num2){
    let res=num1*num2;
    console.log(res)
}
mul(14,4)

function div(num1,num2){
    let res=num1/num2;
    console.log(res)
}
div(36,4)

function mod(num1,num2){
    let res=(num1%num2);
    console.log(res)
}
mod(13,2)

function pow(num1,num2){
    let res=(num1**num2);
    console.log(res)
}
pow(8,2)

let factorial=(num)=>{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact
}
    console.log(factorial(5))

    
    