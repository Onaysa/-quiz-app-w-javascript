/*
step 1. displays start page - title and paragraph
start button -  (triggers the quiz game and displays timer and question page)F0E3FF 481380 DFBAF7
​

step 2. displays question page and hides start page - timer will start when the start button is clicked from start page, display question and show 4 four answer buttons,  
When you click one of the answer button, show correct or wrong. . Total remaining is 75 seconds for 5 questions. total = number of Questions * 15 seconds.
​
When you get a wrong answer, your time gets deducted by 15 sec off the clock and it needs to show wrong message. If you get it right, no penalty off clock but you need to show Correct message.
​
step 3. Once you answer all the questions, you will be presented with the score and input text to enter your initial and a submit button. The timer should stop
and time left becomes your score. When you click the submit, it store your initial and score in localstorage
​
step 4:
Show a dashboard of all the highscores 
*/

//var restartEl = document.querySelector(".restart");
//var questionEl = document.querySelector(".question");
//var infoBoxEl = document.querySelector(".info_box");
//var startBtnEl = document.querySelector(".startBtn");
//function startquiz() {
//infoBoxEl.classList.add("d-none");
//restartEl.classList.remove("");
//startBtnEl.classList.remove("d-none");
//}
//restartEl.addEventListener("click", startquiz);
//startBtnEl.addEventListener("click", startquiz);

const startBtn = document.querySelector(".startBtn button");
const infoBox = document.querySelector(".infoBox");
const continu_btn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");

//If Start Quiz Button Clicked
startBtn.onclick = () => {
    infoBox.classList.add("activeInfo"); //show the info box
}
//If Continue Button clicked
continu_btn.onclick = () => {
  infoBox.classList.remove("activeInfo"); //hide the info box
  quizBox.classList.add("activeQuiz"); //show the quiz box
  showQuestions(0);
  queCounter(1);
}

//If Continue Button Clicked
//ContinueBtn.onclick = ()=>{
// infoBox.classList.remove("d-none"); //hide the info box
//quizBox.classList.add("d-none"); //show the quiz box

//}

let que_count = 0;
let que_numb = 1;

const nextBtn = quizBox.querySelector(".nextBtn");

//If Next Button clicked 
  nextBtn.onclick = ()=>{
     if(que_count < questions.length - 1){
         que_count++;
         que_numb++;
         showQuestions(que_count);
         queCounter(que_numb );
     }else{
         console.log("Questions complete");
     }
    

}

//getting questions and options from array
function showQuestions(index){
  const que_text = document.querySelector(".question");
  const option_list = document.querySelector(".optionList");  
   let que_tag = '<span>'+ questions[index].numb+"."+ questions[index].question+ '</span>';
   let option_tag = '<div class="option">'+ questions[index].options[0]+'<span></span></div>'
                   + '<div class="option">'+ questions[index].options[1]+'<span></span></div>'
                  + '<div class="option">'+ questions[index].options[2]+'<span></span></div>'
                   + '<div class="option">'+ questions[index].options[3]+'<span></span></div>';
   que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  
}



function queCounter(index) {
const bottom_ques_counter = quizBox.querySelector(".totalQue");
let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+questions.length+'</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}