function numberDivisors(n) {
    let result = 0;
    let currentNumber = n;
    let i = 0;

    while(currentNumber >= 1) {
        if( n / currentNumber === Math.round(n / currentNumber)) {
            result++
        }
        currentNumber--
        i++
    }
    return result
}

console.log(numberDivisors(40));
