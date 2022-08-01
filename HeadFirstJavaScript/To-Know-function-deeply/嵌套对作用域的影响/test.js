var secret = "007";

function getSecret() {
    var secret = "008";

    function getValue() {
        return secret;
    }
    // 返回的是运行getValue函数后所返回的结果
    return getValue();
}

console.log(getSecret());
// 控制台打出 "008"

// var secret = "007";

// function getSecret() {
//     var secret = "008";

//     function getValue() {
//         return secret;
//     }
//     // 返回一个函数引用
//     return getValue;
// }

// var getValueFun = getSecret();
// console.log(getValueFun()) // 控制台打出 "008"
