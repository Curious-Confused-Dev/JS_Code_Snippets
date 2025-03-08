//Code to Check Palindrome

function isPalindrome(str) {
    str = str.toLowerCase();

    let reversedString = str.split('').reverse().join('');

    return str === reversedString;
}

console.table({
1: isPalindrome('ANSHSHSHS'),
2:isPalindrome('Madam'),
3:isPalindrome('Nitin'),
4:isPalindrome('NITIN'),
5:isPalindrome('Racecar'),
6:isPalindrome('Helloworld')
});

// Use console.table() if you want a clear tabular view.
// Use map() or forEach() if you prefer a quick, readable format.
// Use a single console.log() with multiple arguments if you want a compact output.

['ANSHSHSHS', 'Madam', 'Nitin', 'NITIN', 'Racecar', 'Helloworld']
    .forEach(word => console.log(word, isPalindrome(word)));