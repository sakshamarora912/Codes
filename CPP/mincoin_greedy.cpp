// number of denominations using greedy
#include<iostream>
using namespace std;
#define COINS 9
#define MAX 20
int coins[COINS] = { 1, 2, 5, 10, 20,50, 100, 200, 2000 };
void findMin(int cost){
	int coinList[MAX] = { 0 };
	int i, k = 0;
	for (i = COINS - 1; i >= 0; i--) {
		while (cost >= coins[i]) {
			cost -= coins[i];
			coinList[k++] = coins[i];
		}
			}
	for (i = 0; i < k; i++) {
		cout<<coinList[i]<<" ";
	}
}
int main(void){
	int n;
        cin>>n;
       findMin(n);
	return 0;
}


