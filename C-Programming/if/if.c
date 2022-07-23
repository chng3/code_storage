#include <stdio.h>//猜数字游戏
int main(){
    int answer=8;
    int guess;
    printf("please enter your guess ");
    scanf("%d",&guess);
    if (guess>answer){
        printf("too large!\n");
    }
    if (guess<answer){
        printf("too small!\n");
    }
    if (guess==answer){
        printf("Correct!\n");
    }
    return 0;
}
