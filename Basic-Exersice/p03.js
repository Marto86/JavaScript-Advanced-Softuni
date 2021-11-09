function numbers(number) {

    let sum = 0;
    let lastDigit = number % 10;
    let equalCount = 0;
    while (number / 10 > 0) {
        let digit = number % 10;
        sum = sum + digit;

        if (digit !== lastDigit) {
            equalCount++;
        }
        lastDigit = digit;

        number = Math.floor(number / 10);



    }
    console.log(equalCount === 0 ? true : false)
    console.log(sum)
}
numbers(222232)