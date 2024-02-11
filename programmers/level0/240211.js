// 240211 

// Q1. 문자열 출력하기
// 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});



// Q2. flag에 따라 다른 값 반환하기
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
function solution(a, b, flag) {
    return flag ? a+b : a-b;
}



// Q3. a와 b 출력하기
rl.on('line', function (line) {
    input = line.split(' ');
    console.log(`a = ${input[0]}`);
    console.log(`b = ${input[1]}`);
});



// Q4. 문자열 반복해서 출력하기
// 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
rl.on('line', function (line) {
    input = line.split(' ');
    for(let i=0; i<input[1]; i++){
        rl.output.write(input[0]);
    } 
});

// +++ 새롭게 배운 메서드
// repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
// str.repeat(count);
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close',function(){
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
});



// Q5. 대소문자 바꿔서 출력하기
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let switchLetter = "";
    for(let i=0; i<str.length; i++){
       if(str[i] === str[i].toUpperCase()){
          switchLetter += str[i].toLowerCase();
       } else {
          switchLetter += str[i].toUpperCase();
       }
    }
    console.log(switchLetter) 
});