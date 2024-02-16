let x=document.getElementById("output").textContent;
let y=document.getElementById("output");

function addfunc(){
    x++;
    if(x>0){
        y.style.color="green";
    }
    else if(x===0)
    {
        y.style.color="black";
    }
    else{
        y.style.color="red";
    }
   y.innerHTML =x;

}

function minusfunc(){
    x--;
    if(x>0){
        y.style.color="green";
    }
    else if(x===0)
    {
        y.style.color="black";
    }
    else{
        y.style.color="red";
    }
   y.innerHTML =x;

}

function resetfunc(){
    output.innerHTML=0;
    x=0;
    y.style.color="black"
}