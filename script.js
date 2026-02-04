let btnsContainer=document.querySelector(".btns")
let input=document.querySelector("input")
let characters=document.querySelectorAll(".operaters")
let numbers=document.querySelectorAll(".numbers")
let solution=document.querySelector(".solve button")
let del=document.querySelector(".delete")
let remover=document.querySelector(".remover")

btnsContainer.addEventListener("click",(e)=>{
  for(let i=0;i<characters.length;i++){
    if(e.target == characters[i]  ){
       if(input.value==""  ){
       alert("please add number first ")
       return;
    }
     if (input.value.includes(characters[i].innerHTML)) {
          alert("Cannot add consecutive operators");
           return;
     }
     

     input.value+=characters[i].innerHTML;
    break;
    
    }
}

for (const element of numbers) {
    if(e.target == element){
       input.value+=element.innerHTML
    }
}

if(e.target == remover){
    input.value="";
}

if(e.target==del){
  input.value=input.value.slice(0,-1);
}
 
})


solution.addEventListener("click",()=>{
  if (input.value =="") {
         alert("please enter data for solution")
         return;
  }else{
      for(let i=0;i<input.value.length;i++){
        if(input.value[i] ==="+" ||input.value[i] ==="-" || input.value[i]==="*" || input.value[i]==="/"){    
            let newValue=input.value.split(`${input.value[i]}`);
            let num1=Number(newValue[0])
            let num2=Number(newValue[1])
           if(input.value[i]==="+")  input.value=num1 + num2;
           else if(input.value[i] ==="-")  input.value=num1 - num2;
           else if(input.value[i] ==="*")  input.value=num1 * num2;
           else if(input.value[i] ==="/") input.value=num1 / num2;
          break;
        }
         
        }
    }
})


