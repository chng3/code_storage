#include<stdio.h>
float fc(int n)
{
	float s;
	if(n==1||n==0) s=1;
	else s=n*fc(n-1);
	return(s);
}
int main()
{
	float k;
	k=fc(10);
	printf("10!=%f\n",k);
	return 0;
}