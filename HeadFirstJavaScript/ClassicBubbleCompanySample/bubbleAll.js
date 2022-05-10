//bubble.js From HeadFistJavaScript Chapter 4

/*泡泡玩具反斗城公司的泡泡配方报表*/

//一对平行数组 scores 和 costs
var scores = [69, 50, 60, 58, 54, 54, 
			  58, 50, 33, 54, 48, 69, 
			  34, 55, 51, 52, 44, 51, 
			  69, 64, 66, 55, 52, 61, 
			  46, 31, 57, 52, 44, 18, 
			  41, 53, 55, 61, 51, 50];
var costs = [.22, .27, .25, .25, .25, .25,
			 .33, .31, .25, .29, .27, .22,
			 .31, .25, .25, .33, .21, .25,
			 .19, .25, .28, .25, .24, .22,
			 .20, .25, .30, .25, .24, .25,
			 .25, .25, .27, .25, .26, .19];

//重构函数printAndGetHighScore
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

//重构函数getBestResults
var getBestResults = function(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            //向数组的最后一个位置添加元素“#+索引号” 使用数组对象中的push方法
            bestSolutions.push("#" + i); // bestSolutions数组中每一位元素都包含#符号,为了打印出带#符号的配方索引号,不同于书本中只显示配方索引号
        }
    }
    return bestSolutions;
};

var bestSolutions = getBestResults(scores, highScore);

console.log("Solution with highest score: " + bestSolutions);

// 本人简单暴力解决方式 实现得到返回最佳性价比配方的索引的函数
// getMostCostEffectiveSolution函数得接受一对平行数组scores和costs,还有一个是scores数组中最高得分的数值

var getMostCostEffectiveSolution = function(scores, highScore, costs){
	// 这里重新生成每一位元素不带#符号的 bestSolutions 数组,以便于直接当作索引使用,而不是直接调用 getBestResults 函数返回带#符号的数组
	var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            //向数组的最后一个位置添加元素“#+索引号” 使用数组对象中的push方法
            bestSolutions.push(i); 
        }
    }

    //记录得分最高且成本最低的配方的索引-变量index
    var index = bestSolutions[0];
    var mostCostEffectivePrice = costs[bestSolutions[0]];
    for (var i = 0; i < bestSolutions.length; i++) {
    	if (mostCostEffectivePrice > costs[bestSolutions[i]]) {
    		index = bestSolutions[i];
    	}
    };
    return index;
};


//示范程序(例程): getMostCostEffectiveSolution函数得接受一对平行数组scores和costs,还有一个是scores数组中最高得分的数值

// function getMostCostEffectiveSolution(scores, highScore, costs) {
//     //书本中先把成本价假设定到远超于泡泡配方成本的几乎100倍,为100
//     var cost = 100;
//     var index;
//     //遍历泡泡配方数组scores[],同时可以拿跟scores平行的数组cost进行对比
//     for (var i = 0; i < scores.length; i++) {
//     	//如果同时满足泡泡配方分数最高和泡泡配方分数最高中成本最低
//         if (scores[i] == highScore && cost > costs[i]) {
//             // 更新索引index和最具性价比cost的值
//             cost = costs[i];
//             index = i;
//         }
//     }
//     return index;
// };

var mostCostEffective = getMostCostEffectiveSolution(scores, highScore, costs);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective!");