//Anna Michelle Sanders; CSCE 102-014; 4/17/23
//more-less
function showMore() {
 var link = document.getElementById("a");
 var paragraph = document.getElementById("p");

  if (paragraph.classList.contains('hidden')) {
    paragraph.classList.remove('hidden');
    link.textContent = "See Less...";
  }
  else {
    paragraph.classList.add('hidden');
    link.textContent = "See More...";
  }
}

function showMe() {
 var link = document.getElementById("o");
 var paragraph = document.getElementById("q");

  if (paragraph.classList.contains('hidden')) {
    paragraph.classList.remove('hidden');
    link.textContent = "See Less...";
  }
  else {
    paragraph.classList.add('hidden');
    link.textContent = "See More...";
  }
}

//quiz
function showResults() {
    let score = 0;
    let question1 = document.getElementById("txt-q1").value;
    let question2 = document.getElementById("txt-q2").value;   
    let question3 = document.getElementById("txt-q3").value;   
    let question4 = document.getElementById("txt-q4").value;
    let results = document.getElementById("result");
  
    if (question1 == "a"){
        score++;
        results.innerHTML += "<p>Question 1 - Correct</p>";
    }
    else {
        results.innerHTML += "<p>Question 1 - Incorrect</p>";
    } 
    if (question2 == "src"){
        score++;
        results.innerHTML += "<p>Question 2 - Correct</p>";
    }
    else {
        results.innerHTML += "<p>Question 2 - Incorrect</p>";
    } 
    if (question3 == "th"){
        score++;
        results.innerHTML += "<p>Question 3 - Correct</p>";
    }
    else {
        results.innerHTML += "<p>Question 3 - Incorrect</p>";
    } 
    if (question4 == "alt"){
        score++;
        results.innerHTML += "<p>Question 4 - Correct</p>";
    }
    else {
        results.innerHTML += "<p>Question 4 - Incorrect</p>";
    } 
    //results
    results.classList.remove("hidden");
    results.innerHTML += "Score: " + score + " / 4";
}

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  
    }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}