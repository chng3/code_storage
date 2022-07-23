#include<stdio.h>
float area(float a,float b)
{
	float s;
	s=a*b;
	return(s);
}
float zc(float a,float b)
{
	float p;
	p=2*(a+b);
	return(p);
}
int main()
{
	float a,b,s,p;
	printf("请输入长方形的边长a,b:");
	scanf("%f%f",&a,&b);
	s=area(a,b);
	p=zc(a,b);
	printf("长方形的周长为p=%f,长方形的面积为s=%f",p,s);
}
