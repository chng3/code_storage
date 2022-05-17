#include <stdio.h> //對兩個變數求最大值的練習 (使用函式)
int max2(int,int);
int main()
{
    int a,b;
    printf("please enter the first integer:");
    scanf("%d",&a);
    printf("please enter the second integer:");
    scanf("%d",&b);
    printf("Max(a,b)=%d",max2(a,b));
    return 0;
}
int max2(int b,int c)//复制a的值到b,b的值到c.
{
    if(b>=c)
    {
        return b;
    }
    else
    {
        return c;
    }

}
