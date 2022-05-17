#include <stdio.h>
int main(){
    int a,b,c;
    printf("please enter the lengths: ");
    scanf("%d%d%d",&a,&b,&c);
    if (a*a+b*b==c*c||b*b+c*c==a*a||c*c+a*a==b*b){
            printf("Rectangular Triangle");
    }
    return 0;
}
