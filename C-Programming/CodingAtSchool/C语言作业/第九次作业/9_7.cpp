#include<stdio.h>
#define N 10
void main()
{
	char a[N],t;
	int i;
	/*输入10个字符并输出*/
	printf("请输入10个字符:\n");
	for(i=0;i<10;i++)
	{
		scanf("%c",&a[i]);
	}
	/*顺序颠倒*/
	for(i=0;i<N/2;i++)
	{
		t=a[i];
		a[i]=a[N-i-1];
		a[N-i-1]=t;
	}
	printf("顺序颠倒后的字符:\n");
	for(i=0;i<N;i++)
	printf("%c",a[i]);
}


