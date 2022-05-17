#include <stdio.h>//求上楼梯的方法数（使用函式）
int method(int);
int main()
{
    int N;
    printf("N = ");
    scanf("%d",&N);
    printf("%d",method(N));
    return 0;
}
int method(int n)
{
    if(n==1||n==2)
    {
        return n;
    }
    return method(n-1)+ method(n-2);
}
