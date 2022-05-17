#include <stdio.h>//消费金额练习,使用阵列进行简化
int main()
{
    int total=0,id;
    int prices[] = {90,75,83,89,71};

    while(1)
    {
        scanf("%d",&id);
        if(id==0)
        {
            break;
        }
        total += prices[id-1];


    }
    printf("Total: %d\n",total);
    return 0;
}
