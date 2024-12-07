const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const sbtn = document.getElementById("sbtn");
const pbtn = document.getElementById("pbtn");
const ebtn = document.getElementById("ebtn");
const time = document.getElementById("time");
let i=0;
let j=0;
let k=0;
let isenable=false;
sbtn.addEventListener('click',()=>
{
    if(!isenable){
        console.log("disabled");
        sbtn.disabled=true;
    }
    timerId = setInterval(()=>
        {
        k++;
        if(k===60){
            k=0;
            setMins();
        }
        secs.innerText=k<10?'0'+k:k;
        },1000)
})
function setMins()
{   
    j++;
    if(j===60){
    j=0;
    setHours();
    }
    mins.innerText=j<10?'0'+j:j;

}
function setHours()
{
    i++;
    if(time.innerText==='PM')
    {
    if(i==13)
    {
        i=0;
        time.innerText='AM'

    }
    }
    else{
        time.innerText='PM'
    }
    hrs.innerText=i<10?'0'+i:i;
}
pbtn.addEventListener("click",()=>
{
console.log("Enabled");
sbtn.disabled=false;
clearInterval(timerId);
})
ebtn.addEventListener("click",()=>
    {

    hrs.innerText='00';
    mins.innerText='00';
    secs.innerText='00';
})