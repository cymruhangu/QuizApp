'use strict';

beginQuizApp();

function beginQuizApp() {
	presentQuiz();
	handleSelection();
	handleAnswer();
}

function presentQuiz() { 
    $('#intro1').fadeIn(1200, function(){
      $('#intro1').fadeOut(1200, function(){
        this.remove();
        $('#intro2').fadeIn(1200, function(){
          $('#intro3').fadeIn(1200, function(){
            $('#splash-set').fadeIn(1200); 
          });
        });
      });
    }); 
  }

//Handle the selection from the splash page
function handleSelection(){
	//upon hitting submit button get which radio button was selected
	$('#start-quiz-form').submit(function(event) {
		event.preventDefault();
		console.log("handleSelection ran");
		let difficulty = $("input[type='radio'][name='level']:checked").val();
		console.log(`Level selected: ${difficulty}`);

	//pass associated data store to startQuiz	
		if(difficulty === "level1"){
			STORE.selectedDifficulty = 'level1';
			STORE.currentSet = STORE.questionSets.level1;
			createQuiz(STORE.questionSets.level1);
		}else if (difficulty === "level2"){
			STORE.selectedDifficulty = 'level2';
			STORE.currentSet = STORE.questionSets.level2;
			createQuiz(STORE.questionSets.level2);
		}else {
			STORE.selectedDifficulty = 'level3';
			STORE.currentSet = STORE.questionSets.level3;
			createQuiz(STORE.questionSets.level3);
		}
	});
}

//Create the Quiz slides
function createQuiz(dataSet){
	console.log(`createQuiz ran`);
	let currentScore = 0;
	let htmlArray = [];
	let htmlString = "";

	for(let i=0; i<dataSet.length; i++){
		//create html string and push to array
		const questionString = generateQuestionString(dataSet, i, currentScore);
		htmlArray.push(questionString);
		//join the array to the string
		htmlString = htmlArray.join('');
	} 
	//Pass the string to .quiz-container
	$('.quiz-container').html(htmlString);
	
	//Load first slides background immage ....new function
	let nextImg = `url('${dataSet[0].img}')`;
	$('.quiz-container').css("background-image", "" + nextImg ); 

	$('.quiz-container').show(1000);
	$('.splash').fadeOut(500, function(){
			$('#slide-' + STORE.slideNum).fadeIn(800);
			$('.quiz-footer').show(600);
	});	 
}

//Generate the HTML for all question slides based on selected level
function generateQuestionString(dataSet, i, currentScore){
	let current = i + 1;
	let x = dataSet[i].answer;
	let textAnswer = dataSet[i].options.x;
	return ` 
		<div class="slide" id="slide-${current}">
		<header>
			<h3>Question ${current} of 10</h3>
        	
        	<h3 class="instructions">(select one and submit}</h3>
        </header>
        <form class="quiz-form" id="quiz-form${current}">
        	<fieldset class="radioPanel">
        		<legend>${dataSet[i].question}</legend>
        		<label>
	        		<input class="a" type="radio" name="question${current}" value="a" required>
	          		<span class="answer answer_a">${dataSet[i].options.a}</span>
	          	</label>
	          	<label>
	          		<input class="b" type="radio" name="question${current}" value="b">
	          		<span class="answer answer_b">${dataSet[i].options.b}</span>
	          	</label>
	          	<label>
	          		<input class="c" type="radio" name="question${current}" value="c">
	          		<span class="answer answer_c">${dataSet[i].options.c}</span>
	          	</label>
	          	<label>
	          		<input class="d" type="radio" name="question${current}" value="d">
	          		<span class="answer answer_d">${dataSet[i].options.d}</span>
	          	</label>
	          	 <button class="question question${current}" form="quiz-form${current}" type="submit">Submit</button>
	          </fieldset>
	       </form>
	       <section class="quiz-footer hidden" role="score summary">
        		<div class="scoreboard"> 
            		<p class="verdict"></p>
            		<p class="score">Current Score: 0/0</p>
        		</div>
          		<button class="next hidden" type="button">Next</button>
      		</section> 
        </div>
         `;
}


//Handle the submission of answers
function handleAnswer(){
	$('.quiz-container').on('submit', 'form', function(event){
		$('.splash').addClass('hidden');
		event.preventDefault();

		//determine which questionSet selected
		const i = STORE.questionIndex;
		const dataSet = STORE.currentSet;
		const questionStr = `question${STORE.slideNum}`;
		const choice = $("input[type='radio'][name=" + questionStr + "]:checked").val();

		console.log(`slideNum is ${STORE.slideNum}`);
		console.log(`button clicked. choice is # ${choice} correct answer is ${dataSet[i].answer}`);
		//hide submit button. 
		$('.' + questionStr).hide(600);			
		checkAnswer(choice, dataSet[i]);

		//show results with updated score
		$('.result').show(800);
	
		//unhide next button 
		$('.next').show(800);
		handleNext();
		updateScore();
 	});
}		


//takes choice and answer, increments score, sets p.verdict text/color
	function checkAnswer(choice, question) {
		let verdictHTML = "";
		let color= "";
		if(choice === question.answer){
			STORE.currentScore++;
			color = '#89f963';
			verdictHTML = `<strong>${question.options[question.answer]}</strong> is CORRECT!`;

		}else{
			color = '#fbff44';
			verdictHTML = `WRONG! The correct answer is <strong> ${question.options[question.answer]} </strong>`;
		}
		console.log("html is : " + verdictHTML);
		$('p.verdict').css('color', color).html(verdictHTML);
	}


//update the scoreboard
function updateScore(){
		let scoreStr = `${STORE.currentScore}/${STORE.slideNum}`;
		console.log(`scoreStr is ${scoreStr}`);
		$("p.score").html(`Current Score: ${scoreStr}`);
}

//handle click of next button & present next question.
function handleNext() {
		//event handler on next which changes slides
		$('.next').on('click', function(event){
			event.stopImmediatePropagation();
			event.preventDefault();

			console.log("Next button clicked!");
			//hide active slide, next button, and .result
			$("#slide-" + STORE.slideNum).hide();
			$('.next').hide();
			$('.result').hide();

			let scoreStr = `${STORE.currentScore}/${STORE.slideNum}`;

			//if !end of questions
			if(STORE.slideNum <=9) {
				STORE.slideNum++;
				STORE.questionIndex++;
				$('p.verdict').html(" ");
				changeSlide();
			} else {
				//end of questions. show final score page
				$('.quiz-container').hide(600);
				$('.quiz-footer').hide(600);
				$('.final-score').fadeIn(600);
				$('#final').html(`You got ${STORE.currentScore} out of 10 right!`);
				handlePlayAgain();
			}	
		});
}

function changeSlide(){
	let i = STORE.questionIndex;
	let dataSet = STORE.currentSet;
	let nextImg = `url('${dataSet[i].img}')`;
 
  $('.quiz-container').fadeOut(500, function() {
    $(this).css("background-image", "" + nextImg);
    $(this).fadeIn(500);
  });
	$("#slide-" + STORE.slideNum).show(1000);
}

function handlePlayAgain(){
	$('#play-again').on('click', function(event){
		event.preventDefault();
		event.stopImmediatePropagation();
		//reset STORE values	
		STORE.questionIndex = 0;
		STORE.slideNum = 1;
		STORE.currentScore = 0;
		$('.final-score').fadeOut(500, function(){ 
			$('.splash').fadeIn(500);
			$('.quiz-container').show(800);
		})
	});	
}




