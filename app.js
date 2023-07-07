const { Alert } = require("bootstrap");

let fruits = ['saging', 'papaya', 'calamansi', 'lansones', 'mangga'];

for(let i=0; i<fruits.length; i++){
    if(fruits[i] == 'rambutan'){
        console.log('merong rambutan nakita sa index' +i)
    }else{
        console.log('walang nakitang rambutan')
    }
}
let answer = 55+88;
document.getElementById('myH1').innerHTML = ("Answer is "+answer);
document.getElementsByClassName('cp')[0].innerHTML = "test";

