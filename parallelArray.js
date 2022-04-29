//知识点: 平行数组(Parallel Array)
// 本人简单暴力解决方式 实现得到返回最佳性价比配方的索引的函数
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

