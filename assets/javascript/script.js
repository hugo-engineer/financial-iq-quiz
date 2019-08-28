/*
1. how to loop thru object?
2. #resultNotice class not centered

*/

var elQbox = document.getElementById("qBox");
var elqtable = document.getElementById("qtable");
var elquestion = document.getElementById("question");
var elanswer1 = document.getElementById("answer1");
var elanswer2 = document.getElementById("answer2");
var elanswer3 = document.getElementById("answer3");
var elanswer4 = document.getElementById("answer4");
var elresultNotice = document.getElementById("resultNotice");

var correct = 0;
var incorrect = 0;
var quizList = {
    key1: {
        q: "1. When does a financial year end?",
        list: ["30 June", "31 Dec", "1 July", "1 Jan"],
        a: 0
    },
    // this.list[0,]
    key2: {
        q: "2. How numbers does a Tax File Number have?",
        list: [6, 9, 12, 14],
        a: 1
    },        
    key3: {
        q: "3. What does PAYG stands for?",
        list: ["Pay as you go", "Play as you go", "Play a yoga ", "None of the above"],
        a: 0
    },
};
    var q1 = quizList.key1.q;
    var a1 = quizList.key1.list[0];
    var a2 = quizList.key1.list[1];
    var a3 = quizList.key1.list[2];
    var a4 = quizList.key1.list[3];



var test = 1;
var test2 = "quizList." + "key" + test + "." + "q";

console.log(test2);



function welcomeFun() {
    document.getElementById('welcome').style.display = 'none';
    questionFun()
};

// Displaying the Question and Answers
function questionFun() {

    elquestion.innerHTML = "<h4>" + q1 + "</h4>";
    elanswer1.innerHTML = "<h6>" + a1 + "</h6>";
    elanswer2.innerHTML = "<h6>" + a2 + "</h6>";
    elanswer3.innerHTML = "<h6>" + a3 + "</h6>";
    elanswer4.innerHTML = "<h6>" + a4 + "</h6>";

};

function answered(userChoice) {

    if (userChoice == quizList.key1.a) {
        correct++;
        elresultNotice.style.display = 'contents';
        elresultNotice.textContent = "You are correct. Your total score is " + correct + ".";
        setTimeout(timer, 2000);

        console.log(userChoice);
    } else {
        elresultNotice.innerHTML = "You are wrong.";
        setTimeout(timer, 2000);
    };

};

function timer() {
    elresultNotice.style.display = 'none';
    answered();


};




/*
Plan

Slides
1. Home - get started
2. Question slides - answer options
3. Per Q Result - correct, wrong, timeout
4. Loop to questions
5. Quizz Result

Home Slide

1. Collect Name
2. Display instructions
3. Trigger start

Queston Slides
1. Q & A options
2. Timer


Per Q Result Slide
1. Result
- Correct
- Incorrect
- Times up

2. Timer for next q
3. Loop to questions

Quizz Result Slides
1. Show result
- Correct
- Wrong/Times up
- Score %

2. Start again button

--------------------------
Questions:
1. When does a financial year end?

- 30 June
- 31 Dec
- 1 July
- 1 Jan

2. How numbers does a Tax File Number have?
- 6
- 9
- 12
- 14

3. What does a negative gearing mean?
- When you receive less salary than last year
- 

*/