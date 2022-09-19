var a = [];
for(var i = 0; i < 10; i++){
    //  TODO: 待理解以下为函数表达式，函数变量名为数组类型的变量
    a[i] = function(){
        console.log(i);
    };
}

// 调用函数
a[6]();

// var a = [];
// for(let i=0;i<10;i++){
//     a[i] = function(){
//         console.log(i);
//     };
// }

// a[6]();