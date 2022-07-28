module.exports = function toReadable (number) {
        const Digits = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        }
        
        const dosens = {
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety'
        }
        
        numberString = number.toString()
        let humanReadableNumber
        let secondlevel  = [] 
        let firstLevel = []
        let thirdLevel = []
        
        if (number === 0) {result = 'zero'}
        else {

        if (number * 1 >= 100) {
        for (digit in Digits) {
            if (numberString.slice(0, 1) === digit) {
                thirdLevel = Digits[digit] + ' ' + 'hundred'
            }
        }
            if ((numberString.slice(1) * 1) >= 20) {
                for (dosen in dosens) {
                if (numberString.slice(1, 2) === dosen) {
                secondlevel = dosens[dosen]
                }
                }
                for (digit in Digits) {
                if ((numberString.slice(2, 3)*1).toString() === digit) {
                firstLevel = Digits[digit]
                }
                }
            }
            else { 
                 for (digit in Digits) {
                 if ((numberString.slice(1)*1).toString() === digit) {
             
            firstLevel = Digits[digit]
        }
        }}
        humanReadableNumber = thirdLevel + ' ' + secondlevel + ' ' + firstLevel
        }
        
        
        else if (number * 1 >= 20) {
        for (dosen in dosens) {
            if (numberString.slice(0, 1) === dosen) {
                secondlevel = dosens[dosen]
            }
        else  {
        for (digit in Digits) {
        if (numberString.slice(1) === digit)
        firstLevel = Digits[digit]
        }}
        humanReadableNumber = secondlevel + ' ' + firstLevel
        }}
        else {for (digit in Digits) {
            if (numberString === digit)
            firstLevel = Digits[digit]
            humanReadableNumber = firstLevel}}
        result = humanReadableNumber.replace('  ', ' ').trimEnd()
        }
        return result
        }
        
