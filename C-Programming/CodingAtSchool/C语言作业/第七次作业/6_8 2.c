#include<stdio.h>
int i=1;
void add1();
int main()
{
	add1();
	printf("i=%d\n",i);
	return 0;
}
void add1()
{
	i=i+3;
}