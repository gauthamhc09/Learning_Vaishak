//reverse a string
function reverseString(str) {

    const arr = [];
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i])
    }
    while (arr.length) {
        reversedString += arr.shift()
    }
    return reversedString
}

function reverseInt(int) {
    const arr = [];
    const str = String(int);
    reversedNumber = '';

    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] === '-') arr.push(str[i])
        if (str[i] !== '0') {
            arr.push(str[i])
        }
    }
    // console.log('arr', arr)
    while (arr.length) {
        reversedNumber += arr.pop()
    }
    console.log('reversedNumber', typeof +reversedNumber)
    return +reversedNumber
}

console.log(reverseInt(-90))