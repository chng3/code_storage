// mtsuper.c
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
int a(int n);
int num = 0;
char p[11];
int main(int argc, char const *argv[])
{
	for (int i = 2022; i <= 2022222022; ++i){
		if(a(i)){
			num++;
		}
	}
	printf("%d\n",num);
	return 0;
}

int a(int n){
	snprintf(p,11,"%d", n);
	for (int i = 1; i < (strlen(p) + 1) / 2; ++i)
	{		
		if (p[i] < p[i - 1]){
			return false;
		}
	}

	for (int i = 0; i < strlen(p) / 2; ++i)
	{
		if (p[i] != p[strlen(p) - 1 - i]){
			return false;
		}
	}
	return true;
}