#include <stdio.h> //用文字繪製三角形的練習 (使用函式)
void print_star(int);

int main()
{
    int N,i;
    printf("N = ");
    scanf("%d",&N);
    for(i=1; i<=N; ++i)
    {
        print_stars(i);
        printf("\n");
    }
    return 0;
}
void print_stars(int i) //void 作为回传值形态时，表示该函式不回传任何值。
{
    int j;
    for(j=1; j<=i; ++j)
    {
        printf("*");
    }
    return;     //void作为回传值时，return可以省略。
}
