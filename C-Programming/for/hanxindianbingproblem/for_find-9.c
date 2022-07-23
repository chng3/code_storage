#include <stdio.h>//使用for语句实现韩信点兵中的最大值
int main(){
    int max,number;
    printf("MAX= ");
    scanf("%d",&max);
    int answer=0;	//当值找不到时,保证能顺利退出
    for(number=1;number<=max;number++){         //从小到大数
       if(number%3 ==2 && number%5 ==3 && number%7 ==2){
                answer=number;
       }
    }
    if(answer!=0){
    printf("%d",answer);
    }
    return 0;
}
