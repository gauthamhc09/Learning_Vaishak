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
        // if (str[0] === '-') arr.push(str[0])
        if (str[i] !== '-') {
            if (str[0] !== '0' || str[str.length - 1] !== 0) {
                arr.push(str[i])
            }
        }
    }
    while (arr.length) {
        reversedNumber += arr.pop()
    }
    return str[0] === '-' ? `-${reversedNumber}` : +reversedNumber
}

function reverseInteger(int) {
    // const reversed = int.toString().split('').reverse().join('');
    let reversed = '';
    const intString = String(int)
    for (let char of intString) {
        reversed = char + reversed
    }
    return int < 0 ? parseInt(reversed) * -1 : parseInt(reversed)
}


function checkPalidrome(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    if (str === reversed) { return 'It is a palidrome' } else return 'not a palidrome'
}

//check palidrome using 2 pointer method
function checkPalidrome2PointerMethod(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return 'Not a palidrome'
        }
        left++;
        right--;
    }
    return 'It is a palidrome'
}
console.log(checkPalidrome2PointerMethod('racecar'))