#include <stdio.h>//函式递回
int f(int);
int main()
{
    printf("%d",f(0));
    return 0;
}
int f(int i)
{
    if(i==3)
    {
        return i;
    }
    return f(i+1);
}
