// Code your solution here!


function printString(str) {
    console.log(str[0])
    return str.length > 1 ? printString(str.slice(1, str.length)) : true
}

function reverseString(str) {
    return str.length < 2 ? str : reverseString(str.slice(1)) + str[0]
}

function maxOf(arr) {
    if (arr.length < 2)
        return arr[0]

    if (arr[1] < arr[0])
        arr[1] = arr[0]

    return maxOf(arr.slice(1))
}

function includesNumber(arr, num) {
    if (arr.length === 1)
        return false

    if (arr[0] === num)
        return true

    return includesNumber(arr.slice(1), num)
}

function addUpTo(arr, idx) {
    if (idx < 1) return arr[0]

    arr[1] = arr[0] + arr[1]
    return addUpTo(arr.slice(1), idx - 1)
}

function isPalindrome(str) {
    let len = str.length
    if (len <= 2) return true
    return str[0] !== str[len - 1] ? false : isPalindrome(str.slice(1, len - 1))
}