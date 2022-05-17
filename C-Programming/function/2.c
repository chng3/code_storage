#include <stdio.h>
double div(double);    //函数宣告
int N;
int main(){
    scanf("%d",&N);
    printf("%.2f",div(N));
    return 0;
}
double div(double x){   //函式定义
    return x/2;
}
