#include <stdio.h>   //關於變數名稱可視範圍 (scope)

int main()
{
    int i = 3;
    if(i==3)
    {
        i = i+1;
        int i=6;
        i = i+1;
        printf("i=%d\n",i);
    }
    if(i==3)
    {
        printf("%d",i);
    }
    printf("i=%d\n",i);
    return 0;
}
