//create an array to hold the active questions in the future
var currentQs = new Array();

//create a variable to hold the current question in the future
var currentQ = "";
var currentQuiz = "";
var quizTitles = new Array(
	'General Quiz 1',
	'General Quiz 2',
	'General Quiz 3',
	'General Quiz 4',
	'General Quiz 5',
	'General Quiz 6',
	'Utah Law 1',
	'Utah Law 2'
);
//creates a variable to hold whether the answer is showing or hidden
var numcorrect = 0;
var numwrong = 0;
var score = 100;

var wrongQs = new Array();
var randomQ = new Array();
var randomPlace;
var currentAnswers = new Array();

function loadQuestion()
{
    $('#quiznav').show();
	if(currentQs.length == 1){
		$('#quiz-question').hide();
		$('#answer-footer').hide();
		$('#quiz-results').show();
		$('#quiz-results h1').html('You Scored '+numcorrect+'/'+(numcorrect + numwrong)+'!');
	}
	$('#qCount').html(currentQs.length+' Questions');
	randomPlace = Math.floor(Math.random()*currentQs.length); //get random number between 0 and currentQs.length
	randomQ = currentQs.splice(randomPlace,1); // remove question at that random location
	randomQ = randomQ[0];
	
	correctAnswer = randomQ.Correct; //get the correct answer key
	currentAnswers = new Array('a', 'b','c', 'd');
	
	score = (numcorrect / (numcorrect + numwrong)) * 100;
    if ( isNaN(score) ) score = 0;
	$('#quizpercent').html(Math.ceil(score)+'%');
	//A1
	randomPlace = Math.floor(Math.random()*currentAnswers.length);
	randomA = currentAnswers.splice(randomPlace,1);
	$('#answer-'+randomA+' span').html(randomQ.A1);
	$('#select-'+randomA).removeClass('incorrect').addClass('correct');
	//A2
	randomPlace = Math.floor(Math.random()*currentAnswers.length);
	randomA = currentAnswers.splice(randomPlace,1);
	$('#answer-'+randomA+' span').html(randomQ.A2);
	$('#select-'+randomA).removeClass('correct').addClass('incorrect');
	//A3
	randomPlace = Math.floor(Math.random()*currentAnswers.length);
	randomA = currentAnswers.splice(randomPlace,1);
	$('#answer-'+randomA+' span').html(randomQ.A3);
	$('#select-'+randomA).removeClass('correct').addClass('incorrect');
	//A4
	randomPlace = Math.floor(Math.random()*currentAnswers.length);
	randomA = currentAnswers.splice(randomPlace,1);
	$('#answer-'+randomA+' span').html(randomQ.A4);
	$('#select-'+randomA).removeClass('correct').addClass('incorrect');
	
	$('#quiz-question h2').html(randomQ.Q);
}

jQuery(document).ready(function(){
	jQuery('.hidden').hide();
	jQuery('span.quizlink').tap(function(){
		currentQuiz = parseInt( $(this).attr('id').replace('quiz-','') ); //'quiz-0' ==> 0;
		currentQs = questions[currentQuiz];
		
		numcorrect = 0;
		numwrong = 0;
		score = 100;
		
		$('#quiztitle').html(quizTitles[currentQuiz]);
		$('#quizpercent').html('100%');
		$('#qCount').html(currentQs.length+' Questions');
		loadQuestion();
		
		$('#quiz-question').show();
		$('#answer-footer').show();
		$('#quiz-results').hide();
		$.mobile.changePage('#quiz', {transition: "fade"});
	});
	
	jQuery('li[id^="select-"]').tap(function(){
		if( $(this).hasClass('correct') ){
			//correct answer
			numcorrect++;
		}
		else{
			//wrong answer
			numwrong++;
		}
		
		loadQuestion();
	});
	
});