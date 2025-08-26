//your JS code here. If required.
let textInput=document.getElementById("text");
let delayInput=document.getElementById("delay");
let submitBtn=document.getElementById("btn");
let outputContent=document.getElementById("output");


function timer(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(time)

        },time)
    })
    
}

submitBtn.addEventListener("click",async()=>{

    let textInputValue=textInput.value;
    let delayInputValue=Number(delayInput.value);

    await timer(delayInputValue);
    outputContent.textContent=textInputValue;

    
})