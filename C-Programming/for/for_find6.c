#include <stdio.h>//找出所有正因数的练习
int main(){
    int N,i;
    printf("N = ");
    scanf("%d",&N);
    for(i=1;i<=N;i++){      //列出可能的候选者
        if(N%i==0){        //检查合格条件 N的因数：可以整除N的整数(整数:余数为0)
        printf("%d ",i);
        }
    }
    return 0;
}
