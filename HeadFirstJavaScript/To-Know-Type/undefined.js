// 使用未初始化的变量，将会遇到undefined；可以通过 undefined 判断是否给变量赋值了
let x;
if( x == undefined){
    // x 未定义！处理这种情况！
    console.log("x is : " + x);
    // show" x is : undefined" in console
}

let customer = {
    name: "Jenny"
};
if(customer.phoneNumber == undefined) {
    // 获取客户的电话号码
    console.log("the customer's phone number isn't definded yet");
}

let test1 = Math.sqrt(-9);
console.log(isNaN(test1));