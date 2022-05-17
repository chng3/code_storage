#include<stdio.h>
#include<string.h>
void main()
{
	int i,j,min;
	char t[20],str[5][20];
	printf("请输入5个字符串:\n");
	for(i=0;i<5;i++)
	{
		gets(str[i]);
	}
	for(i=0;i<5-1;i++)
	{
		min=i;
		for(j=i;j<5;j++)
			if(strcmp(str[min],str[j])>0) min=j;
			strcpy(t,str[i]);
			strcpy(str[i],str[min]);
			strcpy(str[min],t);
	}
	printf("\n排序结果如下:\n");
	for(i=0;i<5;i++)
		puts(str[i]);
}
