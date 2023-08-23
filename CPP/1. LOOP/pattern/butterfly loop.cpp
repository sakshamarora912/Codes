#include <iostream>
using namespace std;
int main(){
    int n,count;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){cout<<"x";}   //for starting
        for (int j=1;j<=2*(n-i);j++){cout<<" ";} //for spacing
        for (int j=1;j<=i;j++){cout<<"x";} // for ending
        cout<<endl;
    }
    for(int i=n;i>=1;i--){
        for(int j=1;j<=i;j++){cout<<"x";}
        for (int j=1;j<=2*(n-i);j++){cout<<" ";}
        for (int j=1;j<=i;j++){cout<<"x";}
        cout<<endl;
    }

}
