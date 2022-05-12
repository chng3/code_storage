//examle.js
// 创建正则表达式，可调用构造函数RegExp，并传入放在两个斜杠之间的搜索模式

var areaCode = new RegExp(/[0-9]{3}/);

var phoneNumber = new RegExp(/^\d{3}-?\d{4}$/);