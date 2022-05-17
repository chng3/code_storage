int main(){  // 计算从N到M的和
   int sum=0,i,N;
   printf("N=");
   scanf("%d",&N);
   for(i=1;i<=N;i++){
        sum=sum+i;
   }
   printf("sum is %d\n",sum);
   return 0;
}
