#include <stdio.h>//亂數生成 (使用函式)
#include <stdlib.h>
#include <time.h>
int main()
{
    srand(time(0));
    int vi;
    do
    {
        vi=rand()%7;
        printf("(0-6)=%d\n",vi);
    }
    while(vi!=0);
    return 0;
}


