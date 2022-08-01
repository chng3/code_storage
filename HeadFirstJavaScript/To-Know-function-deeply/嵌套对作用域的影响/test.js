// var secret = "007";

// function getSecret() {
//     var secret = "008";

//     function getValue() {
//         return secret;
//     }
//     return getValue();
// }

// console.log(getSecret());

var secret = "007";

function getSecret() {
    var secret = "008";

    function getValue() {
        return secret;
    }
    return getValue();
}

var getValueFun = getSecret();
getValueFun();