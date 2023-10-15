const readlineSync = require('readline-sync');

console.log('Welcome to my Quiz App');

// Taking the name of the user
const username = readlineSync.question('Please Input your Username: \n');
console.log('Hello ' + username + ', Lets test your knowledge on Anime!');

// Instructions
console.log('Rules & Instructions: ');
console.log('1. ' + username + ', There are 10 questions on Anime \'One Piece\' and all are compulsary.');
console.log('2. You will be rewarded 2 points for each correct response.');
console.log('3. You will lose 1 point for incorrect response.');
console.log('4. In MCQ based questions respond by typing the Serial Number of the option that you feel is the correct one.');
console.log('\n');

// main logic
let score = 0;

// for 1 word questions
var questionList = [
    {
        question: 'Who is the right hand-man to the King Of The Pirates in One Piece[full name]?',
        answer: 'Roronoa Zoro',
    },
    {
        question: 'What is the name of Luffy\'s brother that died in the war?',
        answer: 'Ace',
    },
    {
        question: 'Who has the power move named \'Shambles\'[full name]?',
        answer: 'Trafalgar Law',
    },
    {
        question: 'What is the name of the Straw Hat Pirates fishman crewmember?',
        answer: 'Jimbei',
    },
    {
        question: 'What is the name of the Great Pirate who gave Luffy his Straw Hat?',
        answer: 'Shanks',
    },
];

// For mcq questions
var mcqList =[
    {
        array: ['Luffy', 'Zoro', 'Sanji', 'Ussopp', 'Robin', 'Chopper', 'Nami', 'Brook', 'Jimbei', 'Franky'],
        question: 'Who is the Captain of the Straw Hats?',
        answer: 'Luffy',
    },
    {
        array: ['Luffy', 'Zoro', 'Sanji', 'Ussopp', 'Robin', 'Chopper', 'Nami', 'Brook', 'Jimbei', 'Franky'],
        question: 'Who is the Cook on the Thousand Sunny pirate Ship?',
        answer: 'Sanji',
    },
    {
        array: ['Luffy', 'Zoro', 'Sanji', 'Ussopp', 'Robin', 'Chopper', 'Nami', 'Brook', 'Jimbei', 'Franky'],
        question: 'Who is the navigator for the Straw Hats Pirate also known as Cat Burgler?',
        answer: 'Nami',
    },
    {
        array: ['Luffy', 'Zoro', 'Sanji', 'Ussopp', 'Robin', 'Chopper', 'Nami', 'Brook', 'Jimbei', 'Franky'],
        question: 'Who is the doctor for Luffy\'s crew?',
        answer: 'Chopper',
    },
    {
        array: ['Luffy', 'Zoro', 'Sanji', 'Ussopp', 'Robin', 'Chopper', 'Nami', 'Brook', 'Jimbei', 'Franky'],
        question: 'Who among the Strawhats can read Ponygleiffs?',
        answer: 'Robin',
    },
];

// This function will ask users 1 word questions
function quiz(question,answer){
    let userAnswer = readlineSync.question(question);

    if(userAnswer.toLowerCase() == answer.toLowerCase()){
        console.log('You are correct!');
        score = score + 2;
    }
    else{
        console.log('You need to rewatch some episodes it seems.');
        console.log('The correct answer was: ', answer);
        score -= 1;
    }
    if(score < 0){
        score = 0;
    }

    console.log('Your Score is: ', score);
}

// This function will ask users mcq questions
function quizMcq(listOfAnswers, question, answer){
    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);

    if(listOfAnswers[userAnswer] === answer){
        console.log('You are correct!');
        score = score + 2;
    }
    else{
        console.log('No buddy you didn\'t get it.');
        console.log('The correct one was: ',answer);
        score -= 1;
    }
    if(score < 0){
        score = 0;
    }
    console.log('Your Score is: ',score);
}

// This will loop through our 1 word questions array
for(var i = 0;i<questionList.length;i++){
    quiz(questionList[i].question,questionList[i].answer);
}

//  This will loop through our mcq questions array
for(var i = 0;i<mcqList.length;i++){
    quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
}

console.log('Congratulations ' + username + ' on completing the quiz successfully!.\n' + 'Your Total Score is: ' + score);