
/* 题目来自:第十三届蓝桥杯大赛软件赛省赛 Java 大学 B 组 
* ps:这其实是一道出给报考java考生的题目,同样的解题思路java程序跑起来只要1分钟不到的时间就
* 出来,本人为了学习C语言就决定用C写,C运行出结果需要3分多钟左右甚至更长,不知道什么原因。
*
* 题目: 
* 这天小明正在学数数。
* 试题 B: 山 本题总分:5 分
* 他突然发现有些正整数的形状像一座“山”，比如 124565421、145541，它 们左右对称(回文)且数位上的数字先单调不减，后单调不增。
* 小明数了很久也没有数完，他想让你告诉他在区间 [2022, 2022222022] 中有 多少个数的形状像一座“山”。
*【答案提交】
*  这是一道结果填空的题，你只需要算出结果后提交即可。本题的结果为一 个整数，在提交答案时只填写这个整数，填写多余的内容将无法得分。

* 答案：3138

*/


#include <string.h>
#include <stdio.h>
#include <stdbool.h>

int main(int argc, char const *argv[])
{
	// answer记录在区间内有多少个数满足,初始化为0
	int answer = 0;
	int leftNumber = 2022, righNumber = 2022222022;
	char p[11];
	printf("本程序运行可能需要3分钟左右的时间,请耐心等待结果:\n");
	// 遍历区间 [2022, 2022222022] 中的每一个数
	for (int i = leftNumber; i <= righNumber; ++i) {
		//使用snprintf方法将整形数值转成字符串
		snprintf(p,11,"%d", i);

		//条件一: 满足先单调不减 只需判断前(strlen(p)+1)/2 位数
		bool one = true;

		for (int i = 1; i < (strlen(p) + 1) / 2; i++) {
			if (p[i] < p[i - 1]) {
				one = false;
				break;

			}


		}

		//条件二: 对称
		if (one) {
			int count = 0;
			bool broke = false;
			//本人暴力写法
			// for (int i = 0; i < strlen(p) / 2 && !broke; ++i) {
			// 	for (int j = strlen(p) - 1 - i; j > (strlen(p) - 1) / 2; j--) {
			// 		if (p[i] == p[j]) {
			// 			count++;
			// 			if (count == strlen(p) / 2) {
			// 				answer ++;
			// 				broke = true;
			// 				break;
			// 			}
			// 			else {
			// 				break;
			// 			}
			// 		} else {
			// 			/*printf("No,The number is no mountainNumber\n");*/
			// 			broke = true;
			// 			break;

			// 		}
			// 	}

			// }
			//双指针法
			for (int i = 0; i < strlen(p) / 2; ++i) {
				if (p[i] != p[strlen(p) - 1 - i])
				{
					broke = true;
					break;
				}
			}
			if (broke) {
				continue;
			} else {
				answer ++;
				//printf("%s\n", p);
			}
		}

	}
	printf("%d\n", answer);

}


