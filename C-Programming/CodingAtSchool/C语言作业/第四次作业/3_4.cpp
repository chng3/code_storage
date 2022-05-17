#include<stdio.h>
int main()
{
	int a,b,s;
	scanf("%d,%d",&a,&b);
	s=a+b;
	printf("%d+%d=%d\n",a,b,s);
	s=a-b;
	printf("%d-%d=%d\n",a,b,s);
	s=a*b;
	printf("%d*%d=%d\n",a,b,s);
	s=a/b;
	printf("%d/%d=%d\n",a,b,s);
	return 0;
}
