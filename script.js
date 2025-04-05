function firstWord(s) {
  // your code here
let str="";
for(let i=0;i<s.length;i++)
{
if(s[i]==' ')
{
return str;
}
str+=s[i];
}
return str;
}

const s = prompt("Enter String:");
alert(firstWord(s));
// Do not change the code below

