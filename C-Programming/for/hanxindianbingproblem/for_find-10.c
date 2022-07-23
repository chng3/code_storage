#include <stdio.h>//使用for语句实现韩信点兵中的最大值
int main(){
    int max,number;
    printf("MAX= ");
    scanf("%d",&max);
    int answer=0;	//当值找不到时,保证能顺利退出
    for(number=max;number>=1&&answer==0;number--){         //从大到小数,&&answer==0保证answer找到后及时退出,为最大值。
       if(number%3 ==2 && number%5 ==3 && number%7 ==2){
                answer=number;          //
       }
    }
    if(answer!=0){
    printf("%d",answer);
    }
    return 0;
}
