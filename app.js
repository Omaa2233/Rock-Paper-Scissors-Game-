let user_score =0;
let comp_score=0;

const choices= document.querySelectorAll(".choice");
const playgame=()=>{
  
}
choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);   
    });
});
