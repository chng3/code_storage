// 1.1 两种模糊匹配

// 1.1.1 横向模糊匹配（横向指的是字符串的长度） - 使用量词 {m,n}：表示连续出现最少m次，最多n次。

// ex
let regex0 = new RegExp(/ab{2,5}c/)

// test
let phrase = ["abcccc", "abbc", "abbbcccc", "abbbbbbc"]
for (let i=0; i<phrase.length; i++){
    if(regex0.test(phrase[i])){
        console.log(phrase[i] + " is qualify");
    }
}


// 1.1.2 纵向模糊匹配 - 使用字符组 譬如[abc]，表示该字符是可以字符 ”a“，”b“，”c“ 中的任何一种。

// ex
let regex1 = new RegExp(/a[123]b/g) // 可以匹配三种字符： "a1b", "a2b", "a3b"

// test
let string = "a0b a1b a2b a3b a4b"
console.log(string.match(regex1))




