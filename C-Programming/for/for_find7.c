#include <stdio.h>//有范围的韩信点兵
   int main(){
   int MIN,MAX,number;
   printf("MAX= ");
   scanf("%d",&MAX);
   printf("MIN= ");
   scanf("%d",&MIN);
   for(number=MAX;number>=MIN;--number){
        if(number%3==2&&number%5==3&&number%7==2){         //符合条件
            printf("%d\n",number);      //符合的条件的值由大到小印
        }
   }
    printf("\n");
    return 0;
}
