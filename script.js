const userinput=document.querySelector(".input-type");
const keys=document.querySelectorAll(".key");
const deletekey=document.querySelector(".delete-key");
const resetkey=document.querySelector(".reset-key");
const equals=document.querySelector(".equals-key");


let decimalAdded=false;
let lastkeyOperator=false;

resetkey.addEventListener("click",()=>{
    console.log("reset");
    userinput.value="";
})

const Keyarray=Array.from(keys);

Keyarray.forEach((key)=>{
    key.addEventListener("click",(event)=>{
        console.log(event.target.innerText);
        const value = event.target.innerText;
        if(value === "." && decimalAdded){
            return;
        }
        if('+-/x'.includes(value)){
            if(lastkeyOperator){
                let initialvalue=userinput.value;
                let updatedvalue=initialvalue.substring(0,initialvalue.length-1)+value;
                userinput.value=updatedvalue;
                return
            }
            lastkeyOperator=true;
            decimalAdded=false;
           }
           else{
            lastkeyOperator=false;
            if(value==="."){
                decimalAdded=true;
            }
            
        }
        userinput.value+=value;
    });
});

equals.addEventListener("click",()=>{
    const values=userinput.value;
    const formattedexpression=values.replace("x","*");
    const finaloutput=eval(formattedexpression)
    userinput.value=finaloutput
})



deletekey.addEventListener("click",()=>{
    console.log("delete clicked")
    let initialvalue=userinput.value;
    let updatedvalue=initialvalue.substring(0,initialvalue.length-1);
    userinput.value=updatedvalue;
})
