#include<stdio.h>
#define X 5
#define Y X+1
#define Z Y*X/2
int main()
{
	int a;
	a=Y;
	printf("%d %d\n",Z,--a);
	return 0;
}