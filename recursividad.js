//FUNCION RECURSIVA
//mediante una funcion anonima
var factorial = function(n){
    if((n==0 || n==1))
        return 1;
        else
        return(n*factorial(n-1));
}

console.log(factorial(5));

//mediante una funcion

function factorial2(n){
    if((n==0 || n==1))
    return 1;
    else
    return (n*factorial(n-1));
}

console.log(factorial2(6));