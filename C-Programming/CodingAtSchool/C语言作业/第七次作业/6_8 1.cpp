#include<stdio.h>
void add(int i);
int main()
{
	int i=1;
	add(i);
	printf("main:i=%d\n",i);
	return 0;
}
void add(int i)
{
	i=i+3;
	printf("add:i=%d\n",i);
}