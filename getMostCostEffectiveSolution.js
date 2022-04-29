//知识点: 平行数组(Parallel Array) 平行数组情况下遍历数组
/* 第一种解决方式,来自本人 */
// 简单暴力解决方式 实现得到返回最佳性价比配方的索引的函数
// getMostCostEffectiveSolution函数得接受一对平行数组scores和costs,还有一个是scores数组中最高得分的数值
var getMostCostEffectiveSolution = function(scores, highScore, costs){
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

console.log("最具性价比的配方是: #" + getMostCostEffectiveSolution(scores, highScore, costs));

/* 本人对比 VS 下面书本给的; ps:其实上面本人的代码在没有看书的情况下用了hfjs书中171页给的提示的那种方法哈哈,按书本中说的话就是以更为难理解的方式 */

/* 第二种解决方式,来自HFJS书 */

function getMostCostEffectiveSolution(scores, highScore, costs) {
    //书本中先把成本价假设定到远超于泡泡配方成本的几乎100倍,为100
    var cost = 100;
    var index;
    //遍历泡泡配方数组scores[],同时可以拿跟scores平行的数组cost进行对比
    for (var i = 0; i < scores.length; i++) {
    	//如果同时满足泡泡配方分数最高和泡泡配方分数最高中成本最低
        if (scores[i] == highScore && cost > costs[i]) {
            // 更新索引index和最具性价比cost的值
            cost = costs[i];
            index = i;
        }
    }
    return index;
};

var mostCostEffective = getMostCostEffectiveSolution(scores, highScore, costs);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective!");
