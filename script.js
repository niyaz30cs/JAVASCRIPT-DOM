var idelement=document.getElementById("text");
console.log(idelement.innerText);

var tagname=document.getElementsByTagName("h2");
console.log(tagname.innertext);

var box=document.getElementsByClassName("box");
console.log(box[3].innerText);


function tochange(){

    var change=document.getElementById("change");
    change.innerText="Hello World...";
}

var change2=document.getElementById("change2");
     change2.addEventListener("click",function(){
        change2.innerText="HELLO WORLD...";
        change2.style.color="red";
        change2.style.backgroundColor="cyan"
        change2.style.fontSize="40px"


     })

function function1(){
    var page=document.getElementById("page");

    page.innerText='"Welcome to Elevation Academy"';
}


var heading=document.getElementById("heading");
    heading.addEventListener("click",function(){
        heading.style.color="red";
        heading.style.fontSize="50px";
    })

      function display(){
        var flex1=document.getElementById("flex");

        flex1.style.flexDirection="column";
      }
    
      var flex2=document.getElementById("flex2");
      flex2.addEventListener("click",function(){
        flex2.style.flexDirection="column";

        
      })

       
      let count=0;
      var flex3=document.getElementById("flex3");
      flex3.addEventListener("click",function(){
        if(count===0)
        {
            flex3.style.flexDirection="column";
            count++; 
        }
        else
      {
        flex3.style.flexDirection="row";
        count--;
      }

      })


  
  setInterval(clock1,1000);
  function clock1(){

    var time=new Date();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds()
    var AMPM="AM";
    var clock=document.getElementById("clock");

    clock.innerHTML="" + hour + ":" + "" + minutes + ":" + "" + second + " "+AMPM;

    if(hour>=12)
    {
        hour-=12;
        AMPM="PM"
    }
    else{
      AMPM="AM";
    }
    
    if(hour<10)
    {
        hour= "0" + hour;
    }

    if(minutes<10)
    {
        minutes= "0" + minutes;
    }

    if(second<10)
    {
        second= "0" +second;
    }
  } 

  const str="abcadeecfb";
  const myset=new Set(str);
  for(var alphabet of myset)
  {
    console.log(...myset);
  }

        
      