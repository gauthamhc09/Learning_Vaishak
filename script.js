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

//function to check maximum character in a string - 'helllllloooooooooooooooooooo' - l
function maxChar(str) {
    const maxValue = {}
    for (let char of str) {
        // maxValue[char] = char;
        if (maxValue[char]) {
            maxValue[char] = maxValue[char] + 1
        } else {
            maxValue[char] = 1
        }
    }

    let max = [0, 0];
    // for (let i = 0; i < arrValues.length; i++) {
    //     if (arrValues[i][1] > max[1]) max = arrValues[i]
    // }
    Object.entries(maxValue).forEach((key) => {
        console.log(key)
        if (key[1] > max[1]) max = key
    })
    console.log(max)
    return `${max[0]} is the maximum repeated value`
}


function maxCharCopy(str) {
    const objValues = {};
    //objValues = {h: 1, e: 1, l:1, }

    for (let i = 0; i < str.length; i++) {
        if (objValues[str[i]]) {
            // objValues[str[i]] = objValues[str[i]] + 1
            objValues[str[i]] += 1
        } else {
            objValues[str[i]] = 1
            //objValues['h'] = 1
        }
    }

    const arrValues = Object.entries(objValues);
    let max = [0, 0]
    for (let i = 0; i < arrValues.length; i++) {
        // console.log(arrValues[i])
        // [h, 1]
        if (arrValues[i][1] > max[1]) {
            max = arrValues[i]
        }
    }
    return `max value is ${max[0]}`
}
// console.log(maxCharCopy('helllllloooooooooooooooooooo'))

