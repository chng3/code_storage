#include<stdio.h>
int main()
{
	int a[]={1,2,3,4,5,6};
	int *p;
	p=a;
	printf("%5d%5d%5d%5d\n",*p,*(++p),*++p,*(p--));
	printf("%5d%5d\n",*p,*(a+2));
	return 0;
}