//examle.js
// 创建正则表达式，可调用构造函数RegExp，并传入放在两个斜杠之间的搜索模式

// TODO: 地区码 待验证
var areaCode = new RegExp(/[0-9]{3}/);

// 符合大陆以1开头的11位手机号码，具体号段不做限制
var phoneNumber = new RegExp(/^1\d{10}$/);


