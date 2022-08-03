// 书本练习题 1
function makePassword(password) {
    return function (guessPassword) {
        console.log(guessPassword); // > 13
        return (guessPassword === password)
    }
}
// test session
// 调用 makePassword() 并向其传递一个正确密码，返回的是一个函数引用（函数表达式），它就是带有 password 自由变量和绑定到数字13的一个环境，是闭包；之后并赋值给变量testPassword；
// let testPassword = makePassword(13);
// 此时调用testPassword 函数 并传递一个猜测的密码数字 13，函数最终执行一个表达式，并将结果返回，此处（13完全等于13）返回结果 true；
// console.log(testPassword(13)); // > true



// 练习题 2
function multN(n) {
    return function(m) {
        return (m*n)
    }
}

let doMultN = multN(7);
console.log(doMultN(5));



// 练习题 3
// function makeCount() {
//     let count = 6;
//     let counter = {
//         increment: function () {
//             count += 1;
//             return count;
//         }
//     }
//     // 返回一个对象包含increment的对象引用
//     return counter;

// }
// let doCounter = makeCount();
// console.log(doCounter.increment()); // > 1
// console.log(doCounter.increment()); // > 2
// console.log(doCounter.increment()); // > 3