#include <stdio.h>//数数字的练习（使用函式）
void countTo3(int);
int main()
{
    countTo3(1);//呼叫从1数到3的函式
    return 0;
}
void countTo3(int i)
{
    if(i<=3)
    {
        printf("%d\n",i);
        countTo3(i+1);
    }
}
