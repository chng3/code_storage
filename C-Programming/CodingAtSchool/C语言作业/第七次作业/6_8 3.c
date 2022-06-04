#include<stdio.h>
void add2(int i);
int main()
{
	int i=2;
	add2(i);
	add2(i);
	return 0;
}
void add2(int i)
{
	static int j=5;
	j=i+j;
	printf("j=%d\n",j);
}