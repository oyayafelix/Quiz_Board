//declaring variables here- questions
//var one
var myQuestions = [
	{
		question: "1. What is the short form of HTML?",
		answers: {
			a: 'HMLT',
			b: 'HTML',
			c: 'TMLH'
		},
		correctAnswer: 'b'
	},
    //var two
	{
		question: "2. What is the other name for Javascript?",
		answers: {
			a: 'JS',
			b: 'ecommerce',
			c: 'I dont Know'
		},
		correctAnswer: 'a'
	},
    //var three
    {
        question: "3. Is C++ a low level language?",
        answers: {
            a: 'yes',
            b: 'no'
        }
    }
];
 //declaring other variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//the main function

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    //showing questions and respective chioces
	function showQuestions(questions, quizContainer){
		var output = [];
        var answers;

        //for each question
        for(var i=0; i<questions.length; i++){

            //reset answer
            answers=[];

            //for each answer...
            for(letter in questions[i].answers){

                //..adding radios
                answers.push(
                    '<label>'
                    +'<input type= "radio" name="question '+i+'" value= "'+letter+'">'
                    +letter+ ':'
                    + questions[i].answers[letter]
                    + '</label>'
                
                );
            }

            //adding the above to the main output
            output.push(
                '<div class="question">' +questions[i].question+ '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'

            );

        }
        //combining the obove two outputs
        quizContainer.innerHTML=output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}