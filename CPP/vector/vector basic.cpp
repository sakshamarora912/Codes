#include <iostream>
#include<vector>
using namespace std;
int main(){
   vector<int> v;
   v.push_back(1);
   v.push_back(2);
   v.push_back(3);
   
   for(int i=0;i<v.size();i++){cout<<v[i]<<" ";}
   
   vector<int>::iterator it;
   for(it=v.begin();it!=v.end();it++){cout<<*it<<" ";}
   
   for(auto element:v){cout<<element<<" ";}
   
   v.pop_back(); //1 char32_t
   
   vector<int> v2(3,50);
   swap(v,v2);
   
    for(auto element:v){cout<<element<<" ";}
    for(auto element:v2){cout<<element<<" ";}
    
    sort(v.begin().v.end()); //sort
    
    pair<int,char> p;
    p.first=4;
    p.second='u';
    
    return 0;
}