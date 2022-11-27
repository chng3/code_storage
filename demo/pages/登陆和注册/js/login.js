var el = document.getElementById('password')
var pwdExp = new RegExp(/(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/)

console.log("1");
if (el.value !== '\0') {
    if (pwdExp.test(el.value)) {
        console.log("密码符合要求");
    } else {
        console.log("密码长度 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符。");
    }
}
TODO: 待解决时刻验证密码问题