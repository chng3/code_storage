#include <stdio.h>//
int main(){
    int N,j,z,i;
    printf("N = ");
    scanf("%d",&N);
    printf("*\n");

    for(z=0;z<=N-3;++z){
        printf("*");
        for(j=1;j<=z;++j){
            printf(" ");
        }
        printf("*\n");
    }
    for(i=1;i<=N;++i){
    printf("*");
    }
    return 0;
}
