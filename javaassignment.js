/*question # 1*/
function ph(i){
    if(i>7){
        return 'acidic';
    }else if (i<7){
        return 'basic';
    }else if (i=7) {
        return 'neutral';
    } else {
        return 'undefined';
    }
 }
 /*
 console.log('the out put for 7 is  ' + ph(7))
 console.log('the out put for 6 is  ' + ph(6))
 console.log('the out put for 3 is  ' + ph(3));
PS C:\Users\bisrat\Desktop\source> node test.js
the out put for 7 is  neutral
the out put for 6 is  basic
the out put for 3 is  basic 

*****************************************************************

 question #2 */

function dis(price){
 if(price >=300){
    price=price-(price*(50/100));
    console.log(price);
}else if (200<price<300){
    price=price-(price*(20/100));
    console.log(price);
}else if (0<price<=200){
    price=price-(price*(5/100));
    console.log(price); 
}else
{
    console.log('error');
}
 }
 
 console.log(dis(300));
/*
PS C:\Users\bisrat\Desktop\source> node assignement.js
150
   */
/***************************************************************************************

/*question #3 */
function shi(price, location){
    if(location == 'EU')
    {
        let totalcost ;
        totalcost=price+5;
        return 'you have to pay totalcost of ' +totalcost+ ", "+ price +' '+'for the product and 5 for the shipping';
    }
    else if (location == "US" || location =="Canada"){
        let totalcost ;
        totalcost=price+15;
        return 'you have to pay totalcost of ' +totalcost+ ", "+ price +' '+'for the product and 5 for the shipping';
    }else{
        let totalcost ;
        totalcost=price+20;
        return 'you have to pay totalcost of ' +totalcost+ ", "+ price +' '+'for the product and 5 for the shipping';
    }
}

console.log(shi(25,'US') );

/*PS C:\Users\bisrat\Desktop\source> node asspra
you have to pay totalcost of 30 ,  25for the product and 5 for the shipping
PS C:\Users\bisrat\Desktop\source> node asspra
you have to pay totalcost of 40, 25 for the product and 5 for the shipping */

/*************************************************************************************

/*question #4 */
function litsong(){
    let i=10
    for(i=10;i>0;i--){
        let y =i-1;
        console.log(i+" "+"in the bed, the little one said roll over " + y +" leff off");
    }
    console.log ('The little one said, Everybody back on the bed!');
}

litsong();
/*
PS C:\Users\bisrat\Desktop\source> node asspra
10 in the bed, the little one said roll over 9 leff off
9 in the bed, the little one said roll over 8 leff off
8 in the bed, the little one said roll over 7 leff off
7 in the bed, the little one said roll over 6 leff off
6 in the bed, the little one said roll over 5 leff off
5 in the bed, the little one said roll over 4 leff off
4 in the bed, the little one said roll over 3 leff off
3 in the bed, the little one said roll over 2 leff off
2 in the bed, the little one said roll over 1 leff off
1 in the bed, the little one said roll over 0 leff off
The little one said, Everybody back on the bed!
PS C:\Users\bisrat\Desktop\source> 

************************************************************************

question #5 */

function area(base,height){
    let area;
    area= 0.5* base*height;
    return area;
}
console.log ('area of a triangle  is  '+area (5,6));

/*PS C:\Users\bisrat\Desktop\source> node asspra
area of a triangle  is  15
***********************************************************************
question #6 */
function demir(){
    let sum=0
for(let i=1; i<100; i++){
    sum=sum+i;

}
 return sum;
}

console.log('the sum is '+ demir())  ;
/*PS C:\Users\bisrat\Desktop\source> node anpr
the sum is 4950

************************************************************************

question #7 */

function demir(){
    let sum=0
for(let i=1; i<102; i=i+2){
    sum=sum+i;

}
 return sum;
}

console.log('the sum is '+ demir())  ;

/*PS C:\Users\bisrat\Desktop\source> node anpr
the sum is 2601
**************************************************************************

question #8 */
function calculator(a,b,type){
    let c;
    if(type=='add'){
        function add(a,b){
            c=a+b;
            return c;
        }
        console.log ('the result of addition is ' +add(a,b));
    }
    else if (type=='multiplication'){
        function mult(a,b){
            c=a*b;
            return c;
        }
        console.log ('the result of multiplication is ' +mult(a,b));
}
    else if (type=='substraction'){
    function sub(a,b){
        c=a-b;
        return c;
    }
    console.log ('the result of substraction is ' + sub(a,b));
}
   else if (type=='division'){
    function div(a,b){
        c=a/b;
        return c;
    }
    console.log ('the result of division is ' + div(a,b));
}
else{
    console.log('error');
}
}

calculator(1,2,'multiplication');
/*PS C:\Users\bisrat\Desktop\source> node app.js
the result of multiplication is 2

*********************************************************************
question 9 */

function max(a,b,c){
if (a>b && a>c)
{
    return a ;
} else if (b>a && b>c)
{
    return b;

}else 
{
    return c;
    
}}
function min(a,b,c){
if (a<b && a<c)
{
    return a ;
    
}else if (b<a && b<c)
{
    return b;
    
}else{

    return c;
    
}
}
function comparision (a,b,c){
    console.log ('the maximum number is ' + max(a,b,c));
    console.log('the mimimun number is ' + min(a,b,c));
}

comparision(5,6,7);
/*PS C:\Users\bisrat\Desktop\source> node max.js
the maximum number is 7
the mimimun number is 5

********************************************************************
question 11 */
function workinghours(hrs){
    let sum=0;
    for ( i=0; i<hrs.length;i++){
        sum=sum+hrs[i];
    }
    console.log('the sum of the working hours is  ' + sum);

}


workinghours([4,5,7.5,8.5,9,6]);
workinghours([6,5.5,3.5,8,10,9]);

/*PS C:\Users\bisrat\Desktop\source> node max.js
the sum of the working hours is  40
the sum of the working hours is  42
**************************************************************


question 13(area of shape) */

function areacalculator(shape,side){
    let area;
    if (shape== 'circle' && side.length==1){


            area= 0.5*side[0]*side[0];
            return area;

        
    }
    else if (shape== 'rectangle' && side.length==2)
    {
        
            area=side[0]*side[1];
            return area;
        }
    
    else if ( shape== 'triangle'  && side.length==2){
       
            area=0.5*side[0]*side[1];
            return area;
        
    }else{
        console.log('wrong shape');
    }

}

console.log('area of the circle is with radius 4 is eaual to '+ areacalculator('circle',[4]));
console.log('area of the rectangle is with height 8 and width 5 is eaual to '+ areacalculator('rectangle',[8,5]));
console.log('area of the triangle is with height 8 and width 5 is eaual to '+ areacalculator('triangle',[8,5]));
/*PS C:\Users\bisrat\Desktop\source> node max.js
area of the circle is with radius 4 is eaual to 8
area of the rectangle is with height 8 and width 5 is eaual to 40
area of the triangle is with height 8 and width 5 is eaual to 20

**********************************************************************

question 14 */

const stock=[{
    Name : 'pencil',
    price : 1.50,
    quantity : 5000

},
{
    Name : 'pen',
    price : 2.0,
    quantity : 3000

},
{
    Name : 'exercisebook',
    price : 20,
    quantity : 0

},
{
    Name : 'ruler',
    price : 1.50,
    quantity : 0

},
{
    Name : 'pencillead',
    price : 1.5,
    quantity : 7000

},
{
    Name : 'mislaneous',
    price : 20,
    quantity : 0

}

];

function stockamount(){
    let totalstock=0;
    for(i=0;i<stock.length;i++){
    totalstock +=(stock[i].quantity)};
    return totalstock;
}
  console.log('total stock on hand is :-    ' + stockamount());

/************************************************************

question 15 */

function stockonhand(){
    for(i=0;i<stock.length;i++){
        if (stock[i].quantity>0){
            console.log(stock[i].Name);
        }
}  }

console.log('list of stock on hand is  :-    ') + stockonhand();

/*PS C:\Users\bisrat\Desktop\source> node stockche.js
list of stock on hand is  :-    
pencil
pen
pencillead

/****************************************************************

question 16 */

function ifexist(prodname){
    for(i=0;i<stock.length;i++){
        if(stock[i].Name===prodname){
            return true
        }
        return false
    }
}

console.log(' the product name pencil is exist in the list  '+ ifexist('pencil'));

/*PS C:\Users\bisrat\Desktop\source> node stockche.js
 the product name pencil is exist in the list  true

console.log(' the product name book is exist in the list  '+ ifexist('book'));

PS C:\Users\bisrat\Desktop\source> node stockche.js
 the product name book is exist in the list  false */
