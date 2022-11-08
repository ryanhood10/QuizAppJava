console.log("test")
var score = 0
//define variables
var card_6 = document.querySelector("#card6")
var Startbtn = document.getElementById("Startbtn")
var timer = 90;

// When you click on Start Quiz button, it dissapears) 
Startbtn.addEventListener('click', function () {
    Startbtn.setAttribute("style", "visibility:hidden")
    // Timer variables and functions, score variables


var interval = setInterval(myTimer, 1000);


function convertSeconds(timer) {
  var min = Math.floor(timer / 60);
  var sec = timer - min * 60;

  //add a leading zero for seconds less than 10
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}
// timer outputs in the timer element, displays Time Expired when count is over
function myTimer() {
  document.getElementById("timer").innerHTML = convertSeconds(timer);
  timer--;
  
     if(timer<= 0){
        clearInterval(interval);
       
        document.getElementById('timer').innerHTML="Time Expired";
     

        card1.setAttribute("style","visibility:hidden");
        card2.setAttribute("style","visibility:hidden");
        card3.setAttribute("style","visibility:hidden");
        card4.setAttribute("style","visibility:hidden");
        card5.setAttribute("style","visibility:hidden");
        card_6.setAttribute("style","visibility:visible");


     } 
    }

}

)
// When you click start Quiz, the first question and answer options appear
Startbtn.addEventListener('click', function () {

    card1.setAttribute("style", "visibility:visible")
    Answer1.setAttribute("style", "visibility:visible")
    Answer2.setAttribute("style", "visibility:visible")
    Answer3.setAttribute("style", "visibility:visible")
    Answer4.setAttribute("style", "visibility:visible")
   

})



// When you click on any of the first 4 answers, the answer dissapears and the next question & answers appear

Answer1.addEventListener('click', function () {

    score += 20
   
    card1.setAttribute("style", "visibility:hidden")
    Answer1.setAttribute('style', "visibility:hidden")
    Answer2.setAttribute("style", "visibility:hidden")
    Answer3.setAttribute("style", "visibility:hidden")
    Answer4.setAttribute("style", "visibility:hidden")
  

})
Answer1.addEventListener('click', function(){
    card2.setAttribute("style", "visibility:visible")
    Answer5.setAttribute("style", "visibility:visible")
    Answer6.setAttribute("style", "visibility:visible")
    Answer7.setAttribute("style", "visibility:visible")
    Answer8.setAttribute("style", "visibility:visible")
}

)
console.log(timer)
Answer2.addEventListener('click', function () {
    
   
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }


    card1.setAttribute("style", "visibility:hidden")
    Answer1.setAttribute('style', "visibility:hidden")
    Answer2.setAttribute("style", "visibility:hidden")
    Answer3.setAttribute("style", "visibility:hidden")
    Answer4.setAttribute("style", "visibility:hidden")
})
Answer2.addEventListener('click', function(){
    card2.setAttribute("style", "visibility:visible")
    Answer5.setAttribute("style", "visibility:visible")
    Answer6.setAttribute("style", "visibility:visible")
    Answer7.setAttribute("style", "visibility:visible")
    Answer8.setAttribute("style", "visibility:visible")
})


Answer3.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }


    card1.setAttribute("style", "visibility:hidden")
    Answer1.setAttribute('style', "visibility:hidden")
    Answer2.setAttribute("style", "visibility:hidden")
    Answer3.setAttribute("style", "visibility:hidden")
    Answer4.setAttribute("style", "visibility:hidden")
})
Answer3.addEventListener('click', function(){
    card2.setAttribute("style", "visibility:visible")
    Answer5.setAttribute("style", "visibility:visible")
    Answer6.setAttribute("style", "visibility:visible")
    Answer7.setAttribute("style", "visibility:visible")
    Answer8.setAttribute("style", "visibility:visible")
})


Answer4.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card1.setAttribute("style", "visibility:hidden")
    Answer1.setAttribute('style', "visibility:hidden")
    Answer2.setAttribute("style", "visibility:hidden")
    Answer3.setAttribute("style", "visibility:hidden")
    Answer4.setAttribute("style", "visibility:hidden")
})
Answer4.addEventListener('click', function(){
    card2.setAttribute("style", "visibility:visible")
    Answer5.setAttribute("style", "visibility:visible")
    Answer6.setAttribute("style", "visibility:visible")
    Answer7.setAttribute("style", "visibility:visible")
    Answer8.setAttribute("style", "visibility:visible")
})

// When you click on any of the 2nd four answers, the next question and answer choices appears

Answer5.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }


    card2.setAttribute("style", "visibility:hidden")
    Answer5.setAttribute('style', "visibility:hidden")
    Answer6.setAttribute("style", "visibility:hidden")
    Answer7.setAttribute("style", "visibility:hidden")
    Answer8.setAttribute("style", "visibility:hidden")
})
Answer5.addEventListener('click', function(){
    card3.setAttribute("style", "visibility:visible")
    Answer9.setAttribute("style", "visibility:visible")
    Answer10.setAttribute("style", "visibility:visible")
    Answer11.setAttribute("style", "visibility:visible")
    Answer12.setAttribute("style", "visibility:visible")
}

)

Answer6.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }


    card2.setAttribute("style", "visibility:hidden")
    Answer5.setAttribute('style', "visibility:hidden")
    Answer6.setAttribute("style", "visibility:hidden")
    Answer7.setAttribute("style", "visibility:hidden")
    Answer8.setAttribute("style", "visibility:hidden")
})
Answer6.addEventListener('click', function(){
    card3.setAttribute("style", "visibility:visible")
    Answer9.setAttribute("style", "visibility:visible")
    Answer10.setAttribute("style", "visibility:visible")
    Answer11.setAttribute("style", "visibility:visible")
    Answer12.setAttribute("style", "visibility:visible")
})


Answer7.addEventListener('click', function () {
    

    score += 20

    card2.setAttribute("style", "visibility:hidden")
    Answer5.setAttribute('style', "visibility:hidden")
    Answer6.setAttribute("style", "visibility:hidden")
    Answer7.setAttribute("style", "visibility:hidden")
    Answer8.setAttribute("style", "visibility:hidden")
})
Answer7.addEventListener('click', function(){
    card3.setAttribute("style", "visibility:visible")
    Answer9.setAttribute("style", "visibility:visible")
    Answer10.setAttribute("style", "visibility:visible")
    Answer11.setAttribute("style", "visibility:visible")
    Answer12.setAttribute("style", "visibility:visible")
})


Answer8.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card2.setAttribute("style", "visibility:hidden")
    Answer5.setAttribute('style', "visibility:hidden")
    Answer6.setAttribute("style", "visibility:hidden")
    Answer7.setAttribute("style", "visibility:hidden")
    Answer8.setAttribute("style", "visibility:hidden")
})
Answer8.addEventListener('click', function(){
    card3.setAttribute("style", "visibility:visible")
    Answer9.setAttribute("style", "visibility:visible")
    Answer10.setAttribute("style", "visibility:visible")
    Answer11.setAttribute("style", "visibility:visible")
    Answer12.setAttribute("style", "visibility:visible")
})

// When you click on the response for the 3rd set of questions, they dissapear and the 4th question and set of answers appears


Answer9.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card3.setAttribute("style", "visibility:hidden")
    Answer9.setAttribute('style', "visibility:hidden")
    Answer10.setAttribute("style", "visibility:hidden")
    Answer11.setAttribute("style", "visibility:hidden")
    Answer12.setAttribute("style", "visibility:hidden")
})
Answer9.addEventListener('click', function(){
    card4.setAttribute("style", "visibility:visible")
    Answer13.setAttribute("style", "visibility:visible")
    Answer14.setAttribute("style", "visibility:visible")
    Answer15.setAttribute("style", "visibility:visible")
    Answer16.setAttribute("style", "visibility:visible")
}

)

Answer10.addEventListener('click', function () {
   
    score += 20
    card3.setAttribute("style", "visibility:hidden")
    Answer9.setAttribute('style', "visibility:hidden")
    Answer10.setAttribute("style", "visibility:hidden")
    Answer11.setAttribute("style", "visibility:hidden")
    Answer12.setAttribute("style", "visibility:hidden")
})
Answer10.addEventListener('click', function(){
    card4.setAttribute("style", "visibility:visible")
    Answer13.setAttribute("style", "visibility:visible")
    Answer14.setAttribute("style", "visibility:visible")
    Answer15.setAttribute("style", "visibility:visible")
    Answer16.setAttribute("style", "visibility:visible")
})


Answer11.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card3.setAttribute("style", "visibility:hidden")
    Answer9.setAttribute('style', "visibility:hidden")
    Answer10.setAttribute("style", "visibility:hidden")
    Answer11.setAttribute("style", "visibility:hidden")
    Answer12.setAttribute("style", "visibility:hidden")
})
Answer11.addEventListener('click', function(){
    card4.setAttribute("style", "visibility:visible")
    Answer13.setAttribute("style", "visibility:visible")
    Answer14.setAttribute("style", "visibility:visible")
    Answer15.setAttribute("style", "visibility:visible")
    Answer16.setAttribute("style", "visibility:visible")
})


Answer12.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card3.setAttribute("style", "visibility:hidden")
    Answer9.setAttribute('style', "visibility:hidden")
    Answer10.setAttribute("style", "visibility:hidden")
    Answer11.setAttribute("style", "visibility:hidden")
    Answer12.setAttribute("style", "visibility:hidden")
})
Answer12.addEventListener('click', function(){
    card4.setAttribute("style", "visibility:visible")
    Answer13.setAttribute("style", "visibility:visible")
    Answer14.setAttribute("style", "visibility:visible")
    Answer15.setAttribute("style", "visibility:visible")
    Answer16.setAttribute("style", "visibility:visible")
})

// when you click a response to the 4th question, the 5th question and set of answers appears

Answer13.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card4.setAttribute("style", "visibility:hidden")
    Answer13.setAttribute('style', "visibility:hidden")
    Answer14.setAttribute("style", "visibility:hidden")
    Answer15.setAttribute("style", "visibility:hidden")
    Answer16.setAttribute("style", "visibility:hidden")
})
Answer13.addEventListener('click', function(){
    card5.setAttribute("style", "visibility:visible")
    Answer17.setAttribute("style", "visibility:visible")
    Answer18.setAttribute("style", "visibility:visible")
    Answer19.setAttribute("style", "visibility:visible")
    Answer20.setAttribute("style", "visibility:visible")
}

)

Answer14.addEventListener('click', function () {
    
    score += 20

    card4.setAttribute("style", "visibility:hidden")
    Answer13.setAttribute('style', "visibility:hidden")
    Answer14.setAttribute("style", "visibility:hidden")
    Answer15.setAttribute("style", "visibility:hidden")
    Answer16.setAttribute("style", "visibility:hidden")
})
Answer14.addEventListener('click', function(){
    card5.setAttribute("style", "visibility:visible")
    Answer17.setAttribute("style", "visibility:visible")
    Answer18.setAttribute("style", "visibility:visible")
    Answer19.setAttribute("style", "visibility:visible")
    Answer20.setAttribute("style", "visibility:visible")
})


Answer15.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card4.setAttribute("style", "visibility:hidden")
    Answer13.setAttribute('style', "visibility:hidden")
    Answer14.setAttribute("style", "visibility:hidden")
    Answer15.setAttribute("style", "visibility:hidden")
    Answer16.setAttribute("style", "visibility:hidden")
})
Answer15.addEventListener('click', function(){
    card5.setAttribute("style", "visibility:visible")
    Answer17.setAttribute("style", "visibility:visible")
    Answer18.setAttribute("style", "visibility:visible")
    Answer19.setAttribute("style", "visibility:visible")
    Answer20.setAttribute("style", "visibility:visible")
})


Answer16.addEventListener('click', function () {
    
    if(timer>0){
        timer-= 5
        interval.textContent = timer;
        localStorage.setItem("timer", timer)
    }

    card4.setAttribute("style", "visibility:hidden")
    Answer13.setAttribute('style', "visibility:hidden")
    Answer14.setAttribute("style", "visibility:hidden")
    Answer15.setAttribute("style", "visibility:hidden")
    Answer16.setAttribute("style", "visibility:hidden")
})
Answer16.addEventListener('click', function(){
    card5.setAttribute("style", "visibility:visible")
    Answer17.setAttribute("style", "visibility:visible")
    Answer18.setAttribute("style", "visibility:visible")
    Answer19.setAttribute("style", "visibility:visible")
    Answer20.setAttribute("style", "visibility:visible")
})

// when you click on a response to the 5th question, the answer choices dissappear


Answer17.addEventListener('click', function () {
    

    card5.setAttribute("style", "visibility:hidden");
    Answer17.setAttribute('style', "visibility:hidden");
    Answer18.setAttribute("style", "visibility:hidden");
    Answer19.setAttribute("style", "visibility:hidden");
    Answer20.setAttribute("style", "visibility:hidden");
    card_6.setAttribute("style", "visibility:visible");
    scoreCount()
})

Answer18.addEventListener('click', function () {
    

    card5.setAttribute("style", "visibility:hidden");
    Answer17.setAttribute('style', "visibility:hidden");
    Answer18.setAttribute("style", "visibility:hidden");
    Answer19.setAttribute("style", "visibility:hidden");
    Answer20.setAttribute("style", "visibility:hidden");
    card_6.setAttribute("style", "visibility:visible");
    scoreCount()
})



Answer19.addEventListener('click', function () {
    

    card5.setAttribute("style", "visibility:hidden");
    Answer17.setAttribute('style', "visibility:hidden");
    Answer18.setAttribute("style", "visibility:hidden");
    Answer19.setAttribute("style", "visibility:hidden");
    Answer20.setAttribute("style", "visibility:hidden");
    card_6.setAttribute("style", "visibility:visible");
    scoreCount()
})



Answer20.addEventListener('click', function () {
    
    score += 20;
    card5.setAttribute("style", "visibility:hidden");
    Answer17.setAttribute("style", "visibility:hidden");
    Answer18.setAttribute("style", "visibility:hidden");
    Answer19.setAttribute("style", "visibility:hidden");
    Answer20.setAttribute("style", "visibility:hidden");
    card_6.setAttribute("style", "visibility:visible");
    scoreCount()
})


// displaying score into score 


function scoreCount(){
    
document.querySelector("#score").textContent= score;



}














