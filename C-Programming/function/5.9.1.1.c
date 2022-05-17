#include <stdio.h>//数数字的练习（使用函式）
void countTo1(int);
int main()
{
    countTo1(1);//呼叫从3数到1的函式
    return 0;
}
void countTo1(int i)
{
    if(i<=3)
    {
        countTo1(i+1);   //只需将两者顺序颠倒即可
        printf("%d\n",i);
    }
}
