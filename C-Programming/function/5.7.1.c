#include <stdio.h> //用文字繪製三角形的練習 (使用函式)
void print_star(int);
void print_triangle(int);
int main()
{
    int N;
    printf("N = ");
    scanf("%d",&N);
    print_triangle(N);
    return 0;
}
void print_triangle(int N){
    int i;
    for(i=1; i<=N; ++i)
    {
        print_stars(i);
        printf("\n");
    }

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
