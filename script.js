let Answer = Math.ceil(Math.random()*100);
console.log(Answer);
let Advert = document.querySelector(".advert");
let chanceText = document.querySelector(".guessChance");
let chances = 10;
chanceText.textContent = "Number of chances of guess:"+ chances;
let GuessArr = [];
let guessArrtext = document.querySelector(".guessArr");
let Card = document.querySelector(".card");
let btn = document.querySelector(".btn-1");
function pressStart(){
    // let btn = document.querySelector(".btn-1");
let GuessNumInput = Number(document.getElementById("1").value);
if (GuessNumInput > 100 || GuessNumInput < 1) {
    alert("Please enter a Number between 1 - 100 only!!")
    chances--;
chanceText.textContent = "Number of chances of guess:"+ chances;
document.getElementById("1").value="";

}else if (GuessNumInput > Answer +10) {
    Advert.innerHTML = "<h3>Your Number is too High!</h3>";
    Advert.style.color = "red";
    chances--;
chanceText.textContent = "Number of chances of guess:"+ chances;
GuessArr.push(GuessNumInput);
guessArrtext.textContent = "Guessed numbers are: "+ GuessArr;
document.getElementById("1").value="";
Card.classList.add('wrong');
Card.classList.remove('near');




} else if(GuessNumInput > Answer) {
    Advert.innerHTML = "<h3>Your Number is a little High!</h3>";
    Advert.style.color = "yellow";
    chances--;
chanceText.textContent = "Number of chances of guess:"+ chances;
GuessArr.push(GuessNumInput);
guessArrtext.textContent = "Guessed numbers are: "+ GuessArr;
document.getElementById("1").value="";
Card.classList.add('near');
Card.classList.remove('wrong');




    
}else if(GuessNumInput < Answer - 10) {
    Advert.innerHTML = "<h3>Your Number is too Low!</h3>";
    Advert.style.color = "red";
    chances--;
chanceText.textContent = "Number of chances of guess:"+ chances;
GuessArr.push(GuessNumInput);
guessArrtext.textContent = "Guessed numbers are: "+ GuessArr;
document.getElementById("1").value="";
Card.classList.add('wrong');
Card.classList.remove('near');





    
}else if(GuessNumInput < Answer) {
    Advert.innerHTML = "<h3>Your Number is a little Low!</h3>";
    Advert.style.color = "yellow";
    chances--;
    chanceText.textContent = "Number of chances of guess:"+ chances;
GuessArr.push(GuessNumInput);
guessArrtext.textContent = "Guessed numbers are: "+ GuessArr;
document.getElementById("1").value="";
Card.classList.add('near');
Card.classList.remove('wrong');




    
}else if( GuessNumInput == Answer){
    Advert.innerHTML = "<h3>Your Number Matched the Answer!</h3>"+ Answer;
    Advert.style.color = "lightgreen";
    chances--;
    chanceText.textContent = "Number of chances of guess:"+ chances;
GuessArr.push(GuessNumInput);
guessArrtext.textContent = "Guessed numbers are: "+ GuessArr;
Card.classList.add('right');
Card.classList.remove('near');
Card.classList.remove('wrong');




} 

if (chances == 0) {

    btn.disabled = true;
    btn.style.opacity = 0.3;
}


}

function restart()
{
    console.log("called");
Card.classList.remove('right');
Card.classList.remove('wrong');
Card.classList.remove('near');
Answer = Math.ceil(Math.random()*100);
console.log(Answer);
document.getElementById("1").value="";
chances = 10;
chanceText.textContent = "Number of chances of guess:"+ chances;
Advert.innerHTML = "<h3> You Have Restarted the Game! </h3>";
Advert.style.color = "white";
btn.disabled = false;
btn.style.opacity = 1;
GuessArr = [];
guessArrtext.textContent = "Guessed numbers are: "+ GuessArr;


}
