let a = "aabbccccdee";
let result = null;

for (let i = 0; i < a.length; i++) {
    let ch = a.charAt(i);
    if (a.indexOf(ch) === a.lastIndexOf(ch)) {
        result = ch;
        break;  
    }
}
console.log(result);