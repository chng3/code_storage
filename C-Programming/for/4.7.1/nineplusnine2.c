#include <stdio.h>//
int main(){
    int c,i,j;
    for(c=1;c<=72;++c){
        i = (c-1)/9+2;
        j = (c-1)%9+1;
        printf("%d * %d = %d\n",i,j,i*j);
    }

return 0;
}
