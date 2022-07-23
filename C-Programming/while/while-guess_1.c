#include <stdio.h>//用while猜数字-并打出猜了几次
int main(){
    int answer=5,guess,time=0;
    while(time==0||guess!=answer){
        time=time+1;
        printf("please enter your guess number:");
        scanf("%d",&guess);
        if(guess>answer){
            printf("Too large\n");
        }else if(guess<answer)
            printf("Too small\n");
    }
    printf("Correct!(%d)",time);
    return 0;
}
