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

    // for (let i = 0; i < str.length; i++) {
    //     if (objValues[str[i]]) {
    //         // objValues[str[i]] = objValues[str[i]] + 1
    //         objValues[str[i]] += 1
    //     } else {
    //         objValues[str[i]] = 1
    //         //objValues['h'] = 1
    //     }
    // }
    for (let char of str) {
        // (objValues[char]) ? objValues[char] += 1 : objValues[char] = 1
        objValues[char] = objValues[char] + 1 || 1
    }
    let max = 0, maxValue = '';
    for (let key in objValues) {
        if (objValues[key] > max) {
            max = objValues[key]
            maxValue = key
        }
    }
    return `${maxValue} is ${max}`

    // const arrValues = Object.entries(objValues);
    // let max = [0, 0]
    // for (let i = 0; i < arrValues.length; i++) {
    //     // console.log(arrValues[i])
    //     // [h, 1]
    //     if (arrValues[i][1] > max[1]) {
    //         max = arrValues[i]
    //     }
    // }
    // return `max value is ${max[0]}`
}
// console.log(maxCharCopy('helllllloooooooooooooooooooo'))


//chunk code - [[1,3], [3,4], [5]]
const values = [1, 2, 3, 4, 5, 8, 7, 6];



// function chunkArr(arr, times) {
//     const loopTimes = Math.floor(arr.length / 2);
//     let result = [];
//     for (let i = 0; i <= loopTimes; i++) {
//         result = [...result, arr.splice(0, times)].filter(item => item.length !== 0)
//     }
//     return result
// }

function chunkArr(arr, times) {
    const result = [];
    let index = 0;
    while (index < arr.length) {
        result.push(arr.slice(index, index + times))
        index = index + times
    }

    return result
}
// console.log(chunkArr(values, 5))

function capitalizeEachWord(sentence) {
    const copySentence = "hello my name is gautham"
    const copySentenceArr = [];
    let index = 0;
    while (index < copySentence.length) {
        if (copySentence[index] !== 0) {
            copySentenceArr.push(copySentence[index])
        }
        index++
    }
    const sentenceArr = sentence.split(' ');
    const result = [];
    const singleWord = [];
    let finalResult = '';
    let i = 0;

    while (i < sentenceArr[0].length) {
        const upperCaseWord = [...sentenceArr[i]][0].toUpperCase();
        const fullWord = [...upperCaseWord, ...sentenceArr[i].slice(1)]
        singleWord.push(fullWord.join(''))
        i++
    }
    result.push(singleWord);
    while (result[0].length > 0) {
        finalResult = finalResult + ' ' + result[0].shift();
    }
    return finalResult

}

// console.log(capitalizeEachWord('hello my name is gautham'))

// const result = [];
// for (let word of words) {
//     result.push(word[0].toUpperCase() + word.slice(1))
// }
// return result.join(' ')

function capitalizeEachWordDiff(sentence) {
    const words = sentence.split(' ');
    let currentWord = '';
    const arrayWord = [];
    const result = [];
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char === ' ') {
            if (currentWord.length > 0) {
                arrayWord.push(currentWord);
                currentWord = ''
            }
        } else {
            currentWord = currentWord + char
        }
    }
    if (currentWord.length > 0) {
        arrayWord.push(currentWord);
    }
    for (let word of arrayWord) {
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return result.join(' ')

}

console.log(capitalizeEachWordDiff(' hello my name is gautham'))
