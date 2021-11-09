// Code your solution here!


function printString(str) {
    console.log(str[0])
    return str.length > 1 ? printString(str.slice(1, str.length)) : true
}

function reverseString(str) {
    return str.length < 2 ? str : reverseString(str.slice(1)) + str[0]
}

function maxOf() {

}

function includesNumber() {

}

function isPalindrome(str) {
    let len = str.length

    // Is palindrome if we reach this
    if (len < 2)
        return true
    // If first and last index are equal continue
    else if (str[0] === str[len - 1])
        return isPalindrome(str.slice(1), len - 1)
    // Is not a palindrome
    else
        return false
}