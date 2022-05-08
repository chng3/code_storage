#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main() {
	//设置一个布尔值 symmetry默认为true
	bool symmetry = true;
	char str[]= "BaeAB"; //很明显,该字符串不是对称的
	//遍历字符串数组
	for (int i = 0; i < strlen(str) / 2; i++) {
		//如果对称的两个位置上的数值不相等,则返回false
		if (str[i] != str[strlen(str)-1-i]) {
			printf("%c != %c\n",str[i],str[strlen(str)-1-i]);
			symmetry = false;
			break;
		}
	}
	if (symmetry) {
		printf("%s:该字符串为对称的\n",str);
	} else {
		printf("%s:该字符串不是对称的\n",str);
	}
	return 0;
}