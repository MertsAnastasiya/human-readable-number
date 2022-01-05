module.exports = function toReadable (number) {
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
    const numberTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numberTy = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const additional = ['', '', 'hundred', 'thousand'];

    let arrayNumber = [];
    if( number == 0)
        return 'zero';

    if ( number < 10) {
        return numbers[Math.floor(number % 10)];
    } else {
        while (Math.floor(number) > 0) {
            arrayNumber.push(Math.floor(number % 10));
            number /= 10;
            console.log(number);
        }

        console.log(arrayNumber);

        let strNumber = '';
        for (let i = arrayNumber.length - 1; i > 1; i--) {
            strNumber = strNumber + ' ' + numbers[arrayNumber[i]] + ' ' + additional[i];
        }

        if (arrayNumber[1] > 1) {
            strNumber = strNumber + ' ' + numberTy[arrayNumber[1]] + ' ' + numbers[arrayNumber[0]];
        } else 
            if (arrayNumber[1] == 1) {
                strNumber = strNumber + ' ' + numberTeen[arrayNumber[0]];
        } else {
            strNumber = strNumber + ' ' + numbers[arrayNumber[0]];
        }
        
        return strNumber.trim();
    }
}
