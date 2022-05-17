#include <stdio.h>//求不定個數正整數平均的練習
int main(){
    int number,i=0,sum=0;
    float average=0;
    printf("please enter the numbers (quit: 0):\n");
    scanf("%d",&number);
    while(number!=0){
        i=i+1;
        sum=sum+number;
        scanf("%d",&number);
    }
    if(sum==0){     //当输入number的值为0时，输出Average is N/A，若if(sum==0)写成if(number==0),则会与while(number!=0)-->
        printf("Average is N/A");
    }else{          //-->跳出的程序冲突，导致无法正常计算else语句中的内容
        average=sum/(float)i;
        printf("Average is %f.\n",average);
    }
    return 0;
}
