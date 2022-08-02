
function makeCounter() {
    let count  = 0;
    function counter() {
        count += 1;       // count 为自由函数
        return count;
    }
    return counter;     // 构成闭包，在其环境中存储了变量count
    
}
// 调用 makeCounter 时，我们获得的是一个闭包：一个函数及其环境
let doCounter = makeCounter();
console.log(doCounter());
console.log(doCounter());
console.log(doCounter());
