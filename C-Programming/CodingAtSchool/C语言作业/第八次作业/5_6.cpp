#include<stdio.h>
void main()
{
	int i,j,min,t,a[10];
	printf("请输入10个整数:\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&a[i]);
		}
		for(i=0;i<9;i++)
		{
		    for(j=9;j>i;j--)
			{
				if(a[j]<a[j-1]) 
				{
					  t=a[j];
                      a[j]=a[j-1];
                      a[j-1]=t;
				}
			}
		}
		printf("排序结果如下:\n");
		for(i=0;i<10;i++)
			printf("%5d",a[i]);
			
}