//Access elements from the HTML
var button = $('.submit-btn');
var statsContainer = $('.stats');

//Event listener 
button.on("click", giveStats);

//Function to be run when button is clicked  
function giveStats() {
  //Array with random messages
  var arrayStats = ["Every 68 seconds, an American is sexually assaulted", "On average, there are 463,634 victims (age 12 or older) of rape and sexual assault each year in the United States", "Ages 12-34 are the highest risk years for rape and sexual assault", "As of 1998, an estimated 17.7 million American women had been victims of attempted or completed rape", "Women ages 18-24 who are college students are 3 times more likely than women in general to experience sexual violence", "As of 1998, 2.78 million men in the U.S. had been victims of attempted or completed rape", "About 3% of American men—or 1 in 33—have experienced an attempted or completed rape in their lifetime", "21% of TGQN (transgender, genderqueer, nonconforming) college students have been sexually assaulted, compared to 18% of non-TGQN females, and 4% of non-TGQN males", "30% of women report symptoms of PTSD 9 months after the rape", "One in 9 girls and 1 in 53 boys under the age of 18 experience sexual abuse or assault at the hands of an adult", "Out of every 1,000 suspected rape perpetrators referred to prosecutors, 520 will be released—either because they posted bail or for other reasons—while awaiting trial"];

  // for (let i = 0; i < arrayStats.length; i++)
  // {
  //   if()
  // }
  //Create a random number that is between 0 and the number of items in the array
  var random = Math.random() * arrayStats.length
  
  //check to see if random number in generated
  console.log(random)

  //Use Math.floor to make that random number a whole number and assign it to the variable named index
  var index = Math.floor(random)
  //check to see if whole number is generated
  console.log(index)

  //append a message the includes what the user said was their sign AND one of the messages and pictures from the two arrays.
  statsContainer.empty();
  statsContainer.append(`
     <p> ${arrayStats[index]}!</p>
    `)
  
  event.preventDefault()
}

// Sign up form Personalised msg

var submitBtn =$(".signupbtn")
var container= $(".add")

submitBtn.on("click", messageList);

function messageList(){
  var name= $(".name").val()
  container.empty();
  container.append(`
        <div>
          <p> Thank you for signing up ${name}!</p>
        </div>`)
      event.preventDefault()
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
