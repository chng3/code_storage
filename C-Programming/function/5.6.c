#include <stdio.h> // 對三個變數求最大值的練習
int max2(int,int);
int max3(int,int,int);
int main(){
    int a,b,c;
    printf("please enter three integer:");
    scanf("%d%d%d",&a,&b,&c);
    printf("Max(a,b,c)=%d\n",max3(a,b,c));
    return 0;
}
int max3(int a,int b,int c){
    return max2(max2(a,b),c);
}
int max2(int b,int c)
{
    if(b>=c)
    {
        return b;
    }
    else
    {
        return c;
    }

}
