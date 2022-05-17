#include <stdio.h>//求连续整数和的练习
int sum(int);
int main()
{
    int N;
    printf("N = ");
    scanf("%d",&N);
    printf("%d",sum(N));
    return 0;
}
int sum(int N)
{
    if(N==1)
    {
        return 1;
    }
    return sum(N-1)+N;
}

