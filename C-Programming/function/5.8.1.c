#include <stdio.h>//掷骰子练习 (使用函式)
#include <stdlib.h>
#include <time.h>
int main()
{
    srand(time(0));
    int vi,N,i,count=0;
    printf("how many times you have to do?:");//你要掷几次?
    scanf("%d",&N);
    for(i=1;i<=N;++i){
        vi=rand()%6+1;
        count+=1;
        printf("%d time=%d\n",count,vi);

    }
    return 0;
}


