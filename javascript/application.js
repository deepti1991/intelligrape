clock =new Object(),


clock.q1=function(){
var d =new Date();
document.write(d.toLocaleDateString());
},

clock.q2=function(){
mon=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
var d =new Date();
document.write(d.getDate()+" ");
 document.write(mon[d.getMonth()-1]+" ");
document.write( d.getFullYear()+" ");
document.write( d.toTimeString());
},

clock.q3=function(a,b)
{
 document.getElementById(a).innerHTML=b;
},

clock.q4=function(a){
 var d=new Date();
 document.getElementById(a).innerHTML=d.toLocaleString();
},


clock.q5=function(){
i=0;
var si=setInterval(function(){document.write("time updated");
i++;
if(i>9)
clearInterval(si);},1000);
};

ex=new Object(),

ex.press=function(){
  var name=prompt("Enter name");
  document.getElementById("name").value=name;
},

ex.change=function(){
document.getElementById("t2").value=document.getElementById("t1").value;;
},

ex.validate=function(){
if(document.getElementById("name").validity.valueMissing || document.getElementById("age").validity.rangeUnderflow)

document.write("Form not submitted");
else
document.write("Form Submitted");
};

function over(elem){
 elem.style.background='red';
 
}
function out(elem){
elem.style.background='white';
}







