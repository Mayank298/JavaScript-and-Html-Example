/**********************************************************************************  
WEB222 
–
Assignment
01
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been cop
ied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Mayankkumar Patel Student ID: 115493165 Date: ________________
*
********************************************************************************/ 
/*********
*********************************
*    grader(mark)
*
*   Purpose:  This function will give us a gread as per the given marks in the argument.
*********************
*************
********/
var grader = function(mark) 
{ 
  var grades;
       if(mark>=80 && mark<=100)
         {
           grades = 'A';
         }
       else if(mark>=70 && mark<=79)
         {
           grades = 'B';
         }
       else if(mark>=60 && mark<=69)
         {
           grades = 'C';
         }
       else if(mark>=50 && mark<=59)
         {
           grades = 'D';
         }
       else
         {
           grades = 'F';
         }
  return grades;
} ;

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");




/*********
*********************************
*   showMultiples(num,numMultiples)
*   Purpose:  This function will give us a multiples of the num as per the second argument.
*********************
*************
********/


function showMultiples (num,numMultiples) { 
  var i;
  var x='';
  var result;
  for (i=1; i<=numMultiples;i++)
    {
      result=num*i;
      x+=num + " x " + i + " = " + result +"\n";
    }
  return x;
}


console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");





/*********
*********************************
*    largerNum(num1,num2)
*
*   Purpose:  This function will give us a larger number from the given number.
*********************
*************
********/

var  largerNum= function (num1,num2) {
  var a = parseInt(num1);
  var b = parseInt(num2);
  var max;
  if(isNaN(a)||isNaN(b))
    {
      max="NaN";
    }
  else
    {
    if(a>b)
      {
        max=a;
      }
      else{
        max=b;
      }
    }
  return max;
};


console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");



/*********
*********************************
*    tempConvert(temperature,convert)
*
*   Purpose:  This function will convert the temperature.
*********************
*************
********/


function tempConvert(temperature,convert) { 

  var con;
  if(convert=="CF" || convert=="cf" || convert=="Cf" || convert=="cF")
    {
      con=((temperature*9/5)+32);
       
    }
  else if(convert=="FC" || convert=="fc" || convert=="fC" || convert=="Fc")
    {
      con=(temperature-32)*(5/9);
      
    }
  return con.toFixed(1);
}



console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");



/*********
*********************************
*    evenNumbers(minNumber,maxNumber)
*
*   Purpose:  This function will give us an even number between two number.
*********************
*************
********/


var evenNumbers = function (minNumber,maxNumber) { 
  
  var i;
  var x="";
  for(i=minNumber;i<=maxNumber;i++)
    {
      if(i==minNumber && i%2==0)
        {
          x+=i+", ";
        }
      else if((i==maxNumber || i== (maxNumber-1))&& i%2==0)
        {
          x+=i;
        }
      else if(i%2==0)
        {
          x+=i+", ";
        }
    }
  return x;
  
};


console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");



/*********
*********************************
*    passingAverage(unknown number of perameter)
*
*   Purpose:  This function will give us an average of the given number.
*********************
*************
********/


var passingAverage = function() {
  var NoOfArg = arguments.length;
  var sum=0;
  var avg;
  var rtn;
     for (var i=0; i<NoOfArg; i++){  
     sum += arguments[i]
     }
  avg=sum/NoOfArg;
  if(avg>49)
  {
	  rtn=true;
  }
  else
  {
	rtn=false;  
  }
  return rtn;
}



console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");



/*********
*********************************
*    counter()
*
*   Purpose:  This function will give us an increment counter everytime when ever it will called.
*********************
*************
********/


var cont=0;
function counter () { 
  cont+=1;
  return cont;
}
var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + counter());
console.log('invoking the function returns: ' + counter());
console.log('invoking the function returns: ' + counter());

console.log("\n");
