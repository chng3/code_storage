#include <stdio.h>//质数判断练习
int main(){
    int N;
    printf("N = ");
    scanf("%d",&N);
    int number;
    int count=0;//也可以设为 isPrime=1,下面也该改变
    for(number=2;number<N&&count==0;++number){
        if(N % number==0){
        count++;//isPrime=0;
        }

    }
    if(count==0){  //if(isPrime)代表为真时,即1
        printf("YES\n");
    }else {
        printf("NO\n");
    }

    return 0;
}
