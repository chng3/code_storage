#include <stdio.h>//
int main(){
    int max;
    printf("MAX= ");//when the number is lower than 23,the Application is stop;
    scanf("%d",&max);

    int number = max;
    while(!(number%3 ==2 && number%5 ==3 && number%7 ==2)){
        --number;
    }
    printf("%d",number);
    return 0;
}
