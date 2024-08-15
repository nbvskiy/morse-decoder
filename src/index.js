const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedString = '';
    
    // Проходим по строке с шагом 10
    for (let i = 0; i < expr.length; i += 10) { // Замените input на expr
        const letterCode = expr.substring(i, i + 10);
        
        // Если это пробел
        if (letterCode === '**********') {
            decodedString += ' ';
        } else {
            // Преобразуем в морзянку
            let morseLetter = '';
            for (let j = 0; j < letterCode.length; j += 2) {
                const codePair = letterCode.substring(j, j + 2);
                if (codePair === '10') {
                    morseLetter += '.';
                } else if (codePair === '11') {
                    morseLetter += '-';
                }
            }
            // Добавляем соответствующую букву
            if (MORSE_TABLE[morseLetter]) {
                decodedString += MORSE_TABLE[morseLetter];
            }
        }
    }

    return decodedString;
}

module.exports = {
    decode
}