#include<stdio.h>
void main()
{
	int array[4][4];
	int i,j;
	for(i=0;i<=3;i++)
		for(j=0;j<=3;j++)
			array[i][j]=(3-i)*4+(j+1);
		for(i=0;i<=3;i++)
		{
			for(j=0;j<=3;j++)
				printf("%10d",array[i][j]);
			printf("\n");
		}
}
