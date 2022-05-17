#include <stdio.h>//随机存取阵列元素
#include <stdlib.h>
#include <time.h>
int main(){
    srand(time(0));
    int counter[6] = {0};
    for(int i=1;i<=6000;++i){
        int dice = rand() % 6 + 1;
        counter[dice-1]++;
    }
    for(int j = 1;j <= 6;++j){
        printf("%d : %d\n",j,counter[j-1]);
    }
    return 0;
}
