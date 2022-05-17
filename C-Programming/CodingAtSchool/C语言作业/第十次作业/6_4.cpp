#include<stdio.h>
int main()
{
	int a=0,b=0,c=0;
	int*aa=NULL,*bb=NULL,*cc=NULL,*p=NULL;
	aa=&a,bb=&b,cc=&c;
	printf("input 3 number:");
	scanf("%d %d %d",&a,&b,&c);
	printf("a=%d b=%d c=%d\n",a,b,c);
	p=aa;
	if(*p<*bb) p=bb;
	if(*p<*cc) p=cc;
	printf("%d\n",*p);
	return 0;
}

