let x = 100;

let foo = function(){
  console.log(x);
}

function fn(fun){
  let x = 10;
  (function(){
    fun();
  })()
}

fn(foo);