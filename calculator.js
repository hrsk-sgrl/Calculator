"use strict"

let btn = document.querySelectorAll(".btn input")
let mathsvalues = [0,1,2,3,4,5,6,7,8,9,".","*","+","-","/","%"]
let str = ""
for(let values of btn)
{
   
   values.addEventListener("click", e =>
   {
    for(let mvalue of mathsvalues)
    {
        if(e.target.getAttribute("value")== mvalue)
        {
            str += mvalue
            document.querySelector(".display input").value = str
        }
    }

    if(e.target.getAttribute("value")== "AC")
    {
        str=""
        document.querySelector(".display input").value = ""
        document.querySelector(".display input").style.textAlign = "left"
    }

    if(e.target.getAttribute("value")== "=")
    {
        const  dd = document.querySelector(".display input")
        dd.value = eval(str)
        dd.style.textAlign = "right"
        str = eval(str)
    }
    
    if(e.target.getAttribute("value")== "Ans")
    {
        document.querySelector(".display input").style.textAlign = "left"
        document.querySelector(".display input").value = str
        
    }

    if(e.target.getAttribute("value")== "DEL")
    {
        const  dd = document.querySelector(".display input").value.slice(0,length-1)
        document.querySelector(".display input").value = dd
        str = dd
    }
    
   })  
}





