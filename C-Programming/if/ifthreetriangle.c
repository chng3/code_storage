#include <stdio.h>//�����������ж���򻯰�
int main(){
    int side1,side2,side3,t;
    printf("please enter the lengths:");
    scanf("%d%d%d",&side1,&side2,&side3);
    if(side1>side2){ t=side1; side1=side2; side2=t;}//�������side1,side2,side3��С��������
    if(side1>side3){ t=side1; side1=side3; side3=t;}
    if(side2>side3){ t=side2; side2=side3; side3=t;}
    if(side1==side3)
        printf("Regular triangle!\n");
    if(side1==side2||side2==side3)
        printf("Isosceles triangle!\n");
    if(side1*side1+side2*side2==side3*side3)
        printf("Rectangular triangle!\n");
    return 0;
}