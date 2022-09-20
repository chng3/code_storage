//examle.js
// 创建正则表达式，可调用构造函数RegExp，并传入放在两个斜杠之间的搜索模式

// TODO: 地区码 待验证
var areaCode = new RegExp(/[0-9]{3}/);

// 符合大陆以1开头的11位手机号码，具体号段不做限制
var phoneNumber = new RegExp(/^1\d{10}$/);

// 匹配16进制颜色值 -- #ffbbad #fc01DF #FFF #ffE
// 确定字符组 [0-9a-fA-F], 其中字符可以出现 3 次或者 6 次，需要使用量词和分支结构
// 注意：使用分支结构需要注意顺序，因为其惰性的原因。防止字符出现6次的进制值匹配成3位，需将匹配6位的表达式提前
let hexColor = new RegExp(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g)

// 匹配时间 - 以24小时制 要求匹配： "23:59", "02:07", "7:9"
let time = new RegExp(/^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/);

// 匹配日期 - yyyy-mm-dd 要求匹配 2017-06-10
// 思路：
// [0-9]{4} - 匹配"年"
// 0[1-9]|1[0-2] 匹配"月"
// 0[1-9]|[12][0-9]|3[01] - 匹配日期
let date = new RegExp(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)

// window 操作系统文件路径
// F:\study\javascript\regex\regular expression.pdf
// F:\study\javascript\regex\
// F:\study\javascript
// F:\
// 思路：
// 整体模式是：
// 盘符:\文件夹\文件夹\文件夹\
// [a-zA-Z]:\\ - 匹配"盘符:\" 其中“\” 需要用到转义符"\\"表示
// [^\\:*<>|"?\r\n/]+\\ - 匹配“文件夹\”
// ([^\\:*<>|"?\r\n/]+\\)* - “文件夹\” 可以出现任意次，所以添加“*”
// ([^\\:*<>|"?\r\n/]+)? 路径的最后一部分可以是 "文件夹"，没有“\”
let fileDir = new RegExp(/^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/)

// 匹配 id


// test
console.log(fileDir.test("F:\\study\\javascript\\regex\\regular expression.pdf"));
console.log(fileDir.test("F:\\study\\javascript\\regex\\"));
console.log(fileDir.test("F:\\study\\javascript"));
console.log(fileDir.test("F:\\"));


