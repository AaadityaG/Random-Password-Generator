const password = document.getElementById("pass");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = '0123456789';
const symbols = '@#$%^&*()~`_+-.';

const all = upperCase + lowerCase + nums + symbols;

function createPassword(){
    let p = '';
    while(length > p.length){
        // password += upperCase[Math.floor(Math.random() * upperCase.length)];
        // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        // password += nums[Math.floor(Math.random() * nums.length)];
        // password += symbols[Math.floor(Math.random() * symbols.length)];

        p += all[Math.floor(Math.random() * all.length)];
    }
    password.value = p;
}


function copyPass(){
    password.select();
    document.execCommand('copy');
}