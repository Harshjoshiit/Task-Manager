#include <bits/stdc++.h>
using namespace std;
#define int long long
#define vec vector<int>
#define ddv vector<vec>
#define ddv2(m) vec(m)
#define loop(i,a,n)    for(int i=a;i<n;i++)
#define cout(v) for(int i=0;i<v.size();i++) cout<<v[i]<<" ";
#define cin(v,n) for(int i=0;i<n;i++) cin>>v[i];
#define all(v) v.begin(),v.end()
#define rall(v) v.rbegin(),v.rend()
#define pb push_back
#define ppb pop_back
#define f first
#define s second
#define nl cout<<endl
#define yes cout<<"YES"<<endl
#define no cout<<"NO"<<endl
bool cmp(pair<int,int> &p1, pair<int,int> &p2)
{
    int d1=p1.f;
    int d2=p2.f;
    if(d1!=d2)
        return d1>d2;
    return p1.s<p2.s;
}
//pow() returns floating value.
int32_t main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(nullptr);
    int t=1;
    cin>>t;
    while(t--)
    {
        
    }
    return 0;
}