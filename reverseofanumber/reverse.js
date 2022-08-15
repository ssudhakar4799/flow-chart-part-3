n=123;
var rem=0,rev=0;
console.log(n);
while(n!=0)
{
    rem=n%10
    console.log(rem);
    rev=rev*10+rem;
    console.log(rev);
    n=n-n%10
    console.log(n);
    n=n/10;
    console.log(n);

    // rem=n%10;
    // console.log(rem);
    // rev=rev+rem;
    // n=n-rem;
    // n=n/10

   
}
console.log(rev);