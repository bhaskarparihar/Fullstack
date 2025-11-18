let testcase1 = "hello";
let testcase2 = "racecar";

function check(word) {
    let isPalindrome = true;

    word = word.toLowerCase();

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            isPalindrome=false;
            break;
           
        }
    }
    console.log(isPalindrome);
    
}

checkPalindrome(testcase1);
checkPalindrome(testcase2);
