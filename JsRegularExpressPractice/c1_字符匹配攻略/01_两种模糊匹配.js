// 1.1 两种模糊匹配

// 1.1.1 横向模糊匹配（横向指的是字符串的长度） - 使用量词 {m,n}：表示连续出现最少m次，最多n次。
// 注意：正则表达式中 g （global）是正则的一个修饰符。表示全局匹配，在目标字符串中按顺序找到所有满足匹配模式的所有子串，强调的是“所有”，而不只是“第一个”。

// ex
let regex0 = new RegExp(/ab{2,5}c/g)   

// test
let string0 = "abc abbc abbbc abbbbc abbbbbc abbbbbbc"
console.log(string0.match(regex0));


// 1.1.2 纵向模糊匹配 - 使用字符组 譬如[abc]，表示该字符是可以字符 ”a“，”b“，”c“ 中的任何一种。

// ex
let regex1 = new RegExp(/a[123]b/g) // 可以匹配三种字符： "a1b", "a2b", "a3b"

// test
let string1 = "a0b a1b a2b a3b a4b"
console.log(string1.match(regex1))




