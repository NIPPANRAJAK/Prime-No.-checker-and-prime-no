n=0;
i=1;  
while(n<10)  
{  
j=1;  
c=0;  
while(j <= i)  
{  
if(i%j == 0)  
c++;  
j++;   
}  
if(c==2)  
{  
console.log(i);  
n++;  
}  
i++;  
}