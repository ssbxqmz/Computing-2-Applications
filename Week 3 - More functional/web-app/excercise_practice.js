function power(x,n){
    return (n == 1) ? x : (x * power(n-1));
}
alert( power(2, 3) );