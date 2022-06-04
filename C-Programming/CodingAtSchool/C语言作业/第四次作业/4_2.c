# include<stdio.h>
int main()
{
	int a,b,c;
	scanf("%d,%d",&a,&b);
	c=a;
	if(a<b)
		c=b;
	c*=c;
	printf("c=%d\n",c);
	return 0;
}
