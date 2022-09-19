// let foo = function() {

//     let a = 1;
  
//     return {
//       add:function(){
//         return ++a;
//       },
//       sub:function(){
//         return --a;
//       }
//     }
//   }
  
//   let f = foo();
//   console.log(f.add()); // 2
//   console.log(f.sub()); // 1
function foo(){
  let a = 7;

  return function(){
console.log(a)
  }
}
let anonymousFun = foo();
anonymousFun();