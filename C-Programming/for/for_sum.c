#include <stdio.h> //印出s=1+3+5+···+99的结果
int main(){
    int s=0,i;
    for(i=1;i<=99;i+=2){
    s=s+i;
    }
    printf("%d",s);
    return 0;
}
