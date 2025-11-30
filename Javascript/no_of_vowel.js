let string="GLA University";
let count=0;
for(let i=0; i<String.size;i++){
    if ("aeiouAEIOU".includes(string.charAt(i))) {
        count++;
    }
}
console.log(count);