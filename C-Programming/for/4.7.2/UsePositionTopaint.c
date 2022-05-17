#include <stdio.h>//基于坐标法绘制图形
int main()
{
    int i,j,N;
    printf("N = ");
    scanf("%d",&N);
    for(i=1; i<=N; ++i)
    {
        for(j=1; j<=N; ++j)
        {
            if(j==1||i==N||j==i)
            {
                printf("*");
            }
            else

                printf(" ");

        }
        printf("\n");
    }
    return 0;
}
