#include <stdio.h>//使用if-else进行四则运算
int main(){
    int num1,num2;
    char op;
    float answer;
    printf("");
    scanf("%d%c%d",&num1,&op,&num2);
    if(op=='+'){
        answer=num1+num2;
    } else if(op=='-'){
        answer=num1-num2;
    } else if(op=='*'){
        answer=num1*num2;
    } else{
        answer=(float)num1/num2;//将num1进行强制转换成float类型，使得结果为浮点数
    }
    printf("%f",answer);
    return 0;
}

