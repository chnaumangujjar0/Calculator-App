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
          alert("please add a number first ")
          return;
       }else if(input.value.endsWith(characters[i].innerHTML) && e.target==characters[i]){
           return;
       }
       else{
          input.value+=characters[i].innerHTML;
           break;
       }
     }
   }
//=========For input numbers===============
  for (const element of numbers) {
    if(e.target == element){
       input.value+=element.innerHTML
     }
   }
//====For AC Button==================
   if(e.target == remover){
    input.value="";
   }

 //===For delete button==========
  if(e.target==del){
  input.value=input.value.slice(0,-1);
  
   }
 
})

//==========For Solution Button===============
solution.addEventListener("click",()=>{
  if (input.value =="") {
         alert("please enter data for solution")
         return;
  }else{
     
       input.value=eval(input.value)
    }
})

//===========For Double Zero===============
   document.querySelector(".zero").addEventListener("click",()=>{
     if(input.value==""){
        return;
     }
     input.value+="00";
   })


