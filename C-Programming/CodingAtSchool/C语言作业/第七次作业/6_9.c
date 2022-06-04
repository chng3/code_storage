#include<stdio.h>
void main()
{
	int i,j,k;
	for(i=1;i<=5;i++) /*先打印上边的四行*/
	{
		for(j=1;j<=5-i;j++)  /*控制要打印的空格数量*/
			printf(" ");
		for(k=1;k<=2*i-1;k++)  /*控制要打印的星号数*/
			printf("*");
		printf("\n");
	}
}