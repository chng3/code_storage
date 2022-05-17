#include <stdio.h>//韩信点兵
int main(){
   int number=1;
   while(!(number%3==2&&number%5==3&&number%7==2)){         //不符合条件时
    ++number;
   }
    printf("%d",number);
    return 0;
}
