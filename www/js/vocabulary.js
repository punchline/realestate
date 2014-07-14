//create an array to hold the active vocabulary words in the future
var currentwords = new Array();
//create a variable to hold the current card in the future
var currentcard = "";
var currentchapter = "";
//creates a variable to hold whether the answer is showing or hidden
var answerstate = "";
var numcorrect = 0;
var numwrong = 0;
var wrongwords = new Array();
var wrongQs = new Array(); // clear any quiz results
var randomcard = "";
var questionshowing = 1;
var questionhidden = 2;

//copy a list of the chapter titles
var rawChapterTitles = new Array();	
for (var i=0; i < wordbank.length; i++) {
	rawChapterTitles[i] = wordbank[i][0];
}
//create a function to return the unique values from an array
function unique(array){
    return $.grep(array,function(el,index){
        return index == $.inArray(el,array);
    });
}

//create a new array containing the unique chapter titles
var uniqueChapterTitles = new Array();
uniqueChapterTitles = unique(rawChapterTitles);

//add the unique chapter titles to the list of chapters
$("#autoselect").live("pagebeforeshow", function() {
	$('#centerlistdisplay').empty();
	for (var i=0; i < uniqueChapterTitles.length; i++) {
		$("#centerlistdisplay").append("<li> <a href=\"#flashcards\" id=\""+ uniqueChapterTitles[i]+"\" class=\"chapterselect\">" + uniqueChapterTitles[i] + "</a></li>")
		$("#centerlistdisplay").listview('refresh');
	}
	$(".chapterselect").bind('click', chapterselect);
});
$("#flashcards").live("pageinit", function() {
	//sets the current accuracy
	var accuracy = 100;
	//empties the list of wrong answers
	var wronganswers = new Array();
	$("#right").bind('tap', gotright);
	$("#wrong").bind('tap', gotwrong);
	$("#question1").bind('tap', clickquestion1);
	$("#question2").bind('tap', clickquestion2);
	$("#showanswers").bind('tap', switchQandA);
	$(".reset").bind('tap', resetcards);
});

$("#flashcards").live("pagebeforeshow", function() {
	$('#answer').hide();
	$('#question2').hide();
	changecardcount();
	answerstate = "hidden";
	loadcard();
});
function loadcard (){
	if(currentwords.length >0){
		
		randomcard = Math.floor(Math.random() * currentwords.length);
		$("#questioncontainer").empty();
	    //$('#questioncontainer').append("<a href=\"#\" data-role=\"button\" data-icon=\"plus\" id=\"question1\"><h3 class=\"centeredtext\">" + currentwords[randomcard][questionshowing] + "</h3></a>");
		//$('#questioncontainer').append("<a href=\"#\" data-role=\"button\" data-icon=\"minus\" id=\"question2\"><h3 class=\"centeredtext\">" + currentwords[randomcard][questionshowing] + "</h3></a>");
	    //$('#questioncontainer').append("<h3 class=\"centeredtext\" id=\"answer\">"+ currentwords[randomcard][questionhidden] + " </h3>");
        
        
        //Here is where i'll do stuff
        
	    $('#questioncontainer').append("<div class='flip'><div class='card'><div class='face front'>" + currentwords[randomcard][questionshowing] + "</div><div class='face back'>"+ currentwords[randomcard][questionhidden] + "</div></div></div> ");
        
        $('.flip').tap(function(){
            $(this).find('.card').toggleClass('flipped');
        });
        $('#flip').tap(function(){
            $('.flip .card').toggleClass('flipped');
        });
        //nothing after this
        
		$('#questioncontainer').trigger('create');
		$("#question1").bind('click', clickquestion1);
		$("#question2").bind('click', clickquestion2);
		$('#answer').hide();
		$('#question2').hide();
		currentcard = randomcard;
		clickquestion2();
	}
}
function gotright(){
	if(currentwords.length == 1 ){
		var score = $('#percentcorrect').text().trim().replace('%','');
		$('.flip').html('<h2 class="eraser">'+score+'/100</h2><p class="eraser"><span class="reset">Reset</span> to try again, or <a href="#studylist">Study</a> the terms you should review!</p><img src="images/professor-2.png" class="professor" style="max-width:80%;max-height:45%;margin:0 auto;"/>').removeClass('flip').addClass('results chalkboard');
		$('#quiznav').hide();
		$('#right').hide();
		$('#flip').hide();
		$('#wrong').hide();
	}
	
	if(currentwords.length >0){
		currentwords.splice(randomcard,1);
		changecardcount();
		numcorrect++;
		changeaccuracy();
	}
	
	loadcard();
}
function gotwrong(){
	console.log("gotwrong");
	console.log(currentwords[randomcard][1] + "was the card that was wrong");
	console.log("wrongwords are:");
	wrongwords.push(currentwords[randomcard]);
	for(var i=0; i < wrongwords.length; i++){
		console.log(wrongwords[i][1]);
	}
	numwrong++;
	changeaccuracy();
	loadcard();	
}
function clickquestion1(){
	console.log("clickquestion1");
	$('#answer').show().trigger( 'updatelayout' );
	$('#question1').hide().trigger( 'updatelayout' );
		$('#question2').show().trigger( 'updatelayout' );
	answerstate = "showing";	
} 
function clickquestion2(){
	$('#answer').hide().trigger( 'updatelayout' );
	$('#question1').show().trigger( 'updatelayout' );
	$('#question2').hide().trigger( 'updatelayout' );
	answerstate = "hidden";
}
function showanswers(){
	console.log("showanswers");
}
function changecardcount(){
	$("#cardcount .ui-btn-text").text(currentwords.length + " Cards");
}
function changeaccuracy(){
	accuracy = numcorrect/(numcorrect+numwrong)*100;
	accuracy = Math.round(accuracy);
	if(isNaN(accuracy) == true){
		accuracy = "--";
	}
	$("#percentcorrect .ui-btn-text").text(accuracy + "%");
}
function resetcards(){	
	$('#right').show();
	$('#flip').show();
	$('#wrong').show();
	$('#quiznav').show();
	$('.results').removeClass('results chalkboard').addClass('flip');
	
	console.log("reset");
	wrongwords.length = 0;
	selectwords();
	$("#questioncontainer").empty();
	
	$('#flashcards').trigger('create');
	$("#question1").bind('click', clickquestion1);
	$("#question2").bind('click', clickquestion2);
	loadcard();
	changecardcount();
	numcorrect = 0;
	numwrong = 0;
	changeaccuracy();
}

function chapterselect(){
	console.log("Selected" + this.id);
	currentchapter = this.id;
	selectwords();
	changecardcount();
	resetcards();
	console.log("changing chapter heading to " + this.id);
	$("#flashcardheader").text(this.id);
}

function selectwords(){
 	currentwords.length = 0;
	 for (var i=0; i < wordbank.length; i++) {
		if(currentchapter == wordbank[i][0]){
			currentwords[currentwords.length] = wordbank[i];
		}
	 }
	 for (var i=0; i < currentwords.length; i++) {
		 console.log(currentwords[i][1]);
	 }
}

$("#studylist").live("pagebeforeshow", function() {
	$('#wordsyoumissed').empty();
	if(wrongwords.length > 0){
		for (var i = 0; i < wrongwords.length; i++){
			$("#wordsyoumissed").append("<li> <h3 class=\"lefttext\">" + 
			wrongwords[i][1] + 
			"</h3><p class=\"lefttext\">" + 
			wrongwords[i][2] +
			"</p><p class=\"ui-li-aside\"><strong>" + 
	//		wrongwords[i][3] +
			"</strong></p></li>");
			
			
			$("#wordsyoumissed").listview('refresh');
		}
	}
});

function switchQandA(){
	if (questionshowing == 2){
		questionshowing = 1;
		questionhidden = 2;
	} else {
		questionshowing = 2;
		questionhidden = 1;
	}
	
	console.log(questionshowing + " is the state of questionshowing");
	
	$("#questioncontainer").empty();
    $('#questioncontainer').append("<a href=\"#\" data-role=\"button\" data-icon=\"plus\" id=\"question1\"><h3 class=\"centeredtext\">" + currentwords[randomcard][questionshowing] + "</h3></a>");
    
	$('#questioncontainer').append("<a href=\"#\" data-role=\"button\" data-icon=\"minus\" id=\"question2\"><h3 class=\"centeredtext\">" + currentwords[randomcard][questionshowing] + "</h3></a>");
	
    $('#questioncontainer').append("<h3 class=\"centeredtext\" id=\"answer\">"+ currentwords[randomcard][questionhidden] + " </h3>");
	$('#questioncontainer').trigger('create');
	$("#question1").bind('click', clickquestion1);
	$("#question2").bind('click', clickquestion2);
	$('#answer').hide();
	$('#answer').trigger('updatelayout');
	$('#question2').hide();
	$('#question2').trigger('updatelayout');
}

$(document).bind('pageinit', function() {
    $(document).on('tap', function(e){
        $('.activeOnce').removeClass($.mobile.activeBtnClass);
    });
});

