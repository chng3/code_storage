#include <stdio.h>//阵列简介-取代多个变数定义
int main(){
    int v[3];
    v[0] = 3;
    v[1] = 5;
    v[2] = 0;
    int max = v[0];	//打擂台方法
    if(v[1] > max){
        max = v[1];
    }
    if(v[2] > max){
        max = v[2];
    }
    printf("%d",max);
    return 0;
}
