#include <stdio.h>//while猜数字练习
int main()
{
    int guess=8;
    int number;
    printf("your number is:");
    scanf("%d",&number);
    while(guess!=number)
    {
        if(number>guess)
        {
            printf("Too large!\n");
        }
        else
        {
            printf("Too small!\n");
        }
        printf("your number is:");
        scanf("%d",&number);
    }
    printf("Correct!");
    return 0;
}
