#include<stdio.h>
#define N 10
void main()
{
	char a[N],t;
	int i;
	/*閿熸枻鎷烽敓鏂ゆ嫹10閿熸枻鎷烽敓琛楀嚖鎷烽敓鏂ゆ嫹閿熸枻鎷烽敓锟�*/
	printf("閿熸枻鎷烽敓鏂ゆ嫹閿熸枻鎷�10閿熸枻鎷烽敓琛楀嚖鎷�:\n");
	for(i=0;i<10;i++)
	{
		scanf("%c",&a[i]);
	}
	/*椤洪敓鏂ゆ嫹鍙╅敓锟�*/
	for(i=0;i<N/2;i++)
	{
		t=a[i];
		a[i]=a[N-i-1];
		a[N-i-1]=t;
	}
	printf("椤洪敓鏂ゆ嫹鍙╅敓鏂ゆ嫹閿熸枻鎷烽敓琛楀嚖鎷�:\n");
	for(i=0;i<N;i++)
	printf("%c",a[i]);
}


