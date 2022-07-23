#include <stdio.h>//使用if-else对多个变数求最大值，区别于if语句。(省去重复)
int main(){
    int a,b,c,max;
    printf("please enter three integers:");
    scanf("%d%d%d",&a,&b,&c);
    if(a>=b&&a>=c){
        max=a;
    } else if(b>=a&&b>=c){
        max=b;
    } else if(c>=a&&c>=b){  //if可省略
        max=c;
    }
    printf("%d",max);
    return 0;
}

