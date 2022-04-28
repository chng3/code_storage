// function sayWoof(name, weight){ 
// 	if(weight > 20){
// 		console.log(name + " says WOOF WOOF");
// 	} else {
// 		console.log(name + " says woof woof");
// 	}
// }

// sayWoof("dino",21);

/* hfjs chapter 2 code sample  */
// function whatShallIWear(temp){
// 	if (temp < 60) {
// 		console.log("Wear a jacket");
// 	} else if (temp < 70){
// 		console.log("Wear a sweater");
// 	} else {
// 		console.log("Wear a t-shirt");
// 	}
// }

// whatShallIWear(50);
// whatShallIWear(60);
// whatShallIWear(80);

/* hfjs chapter 3 code sample  */
// function clunk(times){
// 	var num = times;
// 	while(num > 0){
// 		display("clunk");
// 		num = num - 1;
// 	}
// }

// function thingamajig(size){
// 	var facky = 1;
// 	clunkCounter = 0;
// 	if (size == 0) {
// 		display("clank");
// 	} else if (size == 1){
// 		display("thunk");
// 	} else {
// 		while(size > 1){
// 			facky = facky * size;
// 			size = size - 1;
// 		}
// 		clunk(facky);
// 	}
// }

// function display(output){
// 	console.log(output);
// 	clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(5);
// console.log(clunkCounter);


/* chapter 3 */
// var balance = 10500;
// var cameraOn = true;

// function steal(amount) {
// 	cameraOn = false;
// 	if (amount < balance){
// 		balance = balance - amount;
// 	}
	
// 	cameraOn = true;
// 	return amount;
// }

// var amount = steal(1250);
// alert("Criminal: you stole " + amount + "!" + 
// 	" And the target balance is : " + balance);

/* chapter 4 array */
// 
/*function makePhrases() {
	var words1 = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
	var words2 = ["eat","drink","buy","donate","make"];
	var words3 = ["Hamburger","Coffee","CoCa-Cola","Cheese","Milk"];

	//Math.floor(Math.random()*5):产生一个在区间[0,4]的随机数字
	var rand1 = words1[Math.floor(Math.random()*5)];
	var rand2 = words2[Math.floor(Math.random()*5)];
	var rand3 = words3[Math.floor(Math.random()*5)];

	//造句
	var phrase = rand1 + " " + rand2 + " " + rand3 + "!";
	alert(phrase);
   
}
makePhrases();*/

/*自动造句应用程序*/
/*var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
};
//建立函数以函数声明方式
function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}*/

//建立函数以函数表达式方式:使用关键字funciton,没有定义函数名字,最后赋值给prequal变量
/*var prequal = function(car) {
	if(car.mileage > 10000){
		return false;
	} else if (car.year > 1960){
		return false;
	}
	return true;
}*/


/*var worthALook = prequal(taxi);

if (worthALook){
	console.log("You gotta check out this " + taxi.make 
		+ " " + taxi.model);
} else {
	console.log("You should really pass on the " + taxi.make 
		+ " " + taxi.model);
}*/


/*泡泡玩具反斗城公司的泡泡配方报表*/

var scores = [60, 50, 60, 58, 54, 54, 
			  58, 50, 52, 54, 48, 69, 
			  34, 55, 51, 52, 44, 51, 
			  69, 64, 66, 55, 52, 61, 
			  46, 31, 57, 52, 44, 18, 
			  41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25,
			 .33, .31, .25, .29, .27, .22,
			 .31, .25, .25, .33, .21, .25,
			 .25, .25, .28, .25, .24, .22,
			 .20, .25, .30, .25, .24, .25,
			 .25, .25, .27, .25, .26, .29];

//重构函数
var printAndGetHighScore = function(scores) {
    var highScore = 0;
    for (var i = 0; i < scores.length; i++) {

        console.log("Bubble solution #" + i + " scores: " + scores[i]);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }

    }
    return highScore;
};

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

//重构函数
var getBestResults = function(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            //向数组的最后一个位置添加元素“#+索引号” 使用数组对象中的push方法
            bestSolutions.push("#" + i);
        }
    }
    return bestSolutions;
};

var bestSolutions = getBestResults(scores, highScore);

//显示函数接受的形参(整形数组副本)中分数最高的所有索引(至少一个)
console.log("Solution with highest score: " + bestSolutions);

//待解决
var getMostCostEffectiveSolution = funciton(scores, costs, highScore){
	costs = 0;
	getMostCostEffectiveSolution
	for (var i = 0;i < scores.length; i++) {
		
	}
};
