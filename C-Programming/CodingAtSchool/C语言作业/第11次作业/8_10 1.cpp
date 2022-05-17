#include<stdio.h>
int main()
{
	FILE *fp;
	int k,n,a[6]={1,2,3,4,5,6};
	fp=fopen("d2.dat","w");
	fprintf(fp,"%d%d%d\n",a[0],a[1],a[2]);
	fprintf(fp, "%d%d%d\n",a[3],a[4],a[5]);
	fclose(fp);
	fp=fopen("d2.dat","r");
	fscanf(fp,"%d%d",&k,&n);
	printf("%d,%d\n",k,n);
	fclose(fp);
	return 0;
}