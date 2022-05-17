#include <stdio.h>//do-while猜数字练习(升级)
int main()
{
    int guess=8;
    int number;


    do{
        printf("your number is:");//至少做一次
        scanf("%d",&number);
        if(number>guess)
        {
            printf("Too large!\n");
        }
        if(number<guess)
        {
            printf("Too small!\n");
        }
    }
        while(guess!=number);

    printf("Correct!");
    return 0;
}
