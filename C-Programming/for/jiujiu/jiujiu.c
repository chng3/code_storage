#include <stdio.h>//九九乘法表
int main(){
    int i,y=1;
    for(i=1;i<=9;i++){
        for(y=1;y<=i;++y){
    int sum=i*y;
        printf("%d*%d=%d ",i,y,sum);

        }
    printf("\n");
    }

    return 0;
}
