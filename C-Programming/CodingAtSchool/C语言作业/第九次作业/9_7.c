#include<stdio.h>
#define N 10
void main()
{
	char a[N],t;
	int i;
	/*����10���ַ������*/
	printf("������10���ַ�:\n");
	for(i=0;i<10;i++)
	{
		scanf("%c",&a[i]);
	}
	/*˳��ߵ�*/
	for(i=0;i<N/2;i++)
	{
		t=a[i];
		a[i]=a[N-i-1];
		a[N-i-1]=t;
	}
	printf("˳��ߵ�����ַ�:\n");
	for(i=0;i<N;i++)
	printf("%c",a[i]);
}


