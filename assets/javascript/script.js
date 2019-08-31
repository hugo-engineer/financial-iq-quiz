
var quizList = [

    {
        q: "1. When does a financial year end?",
        list: ["30 June", "31 Dec", "1 July", "1 Jan"],
        a: 0
    },

    {
        q: "2. How numbers does a Tax File Number have?",
        list: [6, 9, 12, 14],
        a: 1
    },
    {
        q: "3. What does PAYG stands for?",
        list: ["Pay as you go", "Play as you go", "Play a yoga ", "None of the above"],
        a: 0
    },
    {
        q: "4. What does P & L stand for?",
        list: ["Play and Laugh", "Profit and Liabilities", "Plan & Launch", "Profit and Loss"],
        a: 3
    },
    {
        q: "5. What is employer's minimum super guarantee contributions % required by law?",
        list: ["8.5%", "7.0%", "9.5%", "None"],
        a: 2
    },
];

var correct = 0;
var incorrect = 0;
var currentQ = 0;

$("#welcome").on("click", function () {

    $("#welcome").css("display", "none");
    questionFun();
});

function questionFun() {
    $("#question").html("<h3>" + quizList[currentQ].q + "</h3>");
    $("#answer1").html("<h5>" + quizList[currentQ].list[0] + "</h5>");
    $("#answer2").html("<h5>" + quizList[currentQ].list[1] + "</h5>");
    $("#answer3").html("<h5>" + quizList[currentQ].list[2] + "</h5>");
    $("#answer4").html("<h5>" + quizList[currentQ].list[3] + "</h5>");
};

$(".an").on("click", function () {
    var answerSelection = $(this).attr("value");

    if (answerSelection == quizList[currentQ].a) {

        correct++;
        $("#resultNotice").css("display", "block")
        $("#resultNotice").html("Your are correct!" + "<br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect);
        setTimeout(timer, 2000);

    } else {
        incorrect++;
        $("#resultNotice").css("display", "block")
        $("#resultNotice").html("Your are incorrect!" + "<br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect);
        setTimeout(timer, 2000);
    };

});

function timer() {

    if (currentQ == (quizList.length - 1)) {

        $("#resultNotice").html("Total Correct: " + correct + "<br>" + "Total Incorrect: " + incorrect + "<br>" + "Start the quiz again.");

        setTimeout(timer2, 5000);

    } else {
        $("#resultNotice").css("display", "none");
        currentQ++;
        questionFun();
    }
};

function timer2() {
    correct = 0;
    incorrect = 0;
    currentQ = 0;
    $("#resultNotice").css("display", "none");
    questionFun();
}
