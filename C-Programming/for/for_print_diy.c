#include <stdio.h>//印出特定条件的整数，印出1到10之间不是3的倍数的偶数
int main(){
    int count;
    for(count=2;count<=10;count+=2){
        if(count%3!=0){
        printf("%d\n",count);
        }
    }
    return 0;
}
