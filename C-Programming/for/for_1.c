#include <stdio.h>//印出M到N之间的连续整数
int main(){
   int count,M,N;
   printf("please enter the number:");
   scanf("%d",&M);
   printf("please enter the number:");
   scanf("%d",&N);
   for(count=M;count<=N;count++){
    printf("%d\n",count);

    }
    return 0;
}
