#include<stdio.h>
int main()
{
	FILE *fp;
	int i,a[6]={1,2,3,4,5,6};
	fp=fopen("d3.dat","w+b");
	fwrite(a,sizeof(int),6,fp);
	fseek(fp,sizeof(int) *3,SEEK_SET);
	fread(a,sizeof(int),3,fp);
	fclose(fp);
	for(i=0;i<6;i++)
		printf("%d,",a[i]);
	return 0;
}
