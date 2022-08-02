let justAvar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    let justAvar = "Just an every day LOCAL";

    function inner() {
        return justAvar;
    }
    // 返回一个指向inner函数的引用
    return inner;
}

// 调用whereAreYou时，将获得一个指向函数inner的引用
let innerFunction = whereAreYou();
let result = innerFunction();
console.log(result);
