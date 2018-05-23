const category = {
    name: "category",
    description: "this is a description of the category.",
    scoreValue: [
        twoHundred = {
            points: 200,
            clues: [
                {
                    clue: "This is the 200 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 200-1 wrong answer.",
                        "This is another 200-1 wrong answer.",
                        "This is a 200-1 wrong answer as well."]
                },
                {
                    clue: "This is the 200 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 200-2 wrong answer.",
                        "This is another 200-2 wrong answer.",
                        "This is a 200-2 wrong answer as well."]
                },
                {
                    clue: "This is the 200 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 200-3 wrong answer.",
                        "This is another 200-3 wrong answer.",
                        "This is a 200-3 wrong answer as well."]
                }]
        },
        fourHundred = {
            points: 400,
            clues: [
                {
                    clue: "This is the 400 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 400-1 wrong answer.",
                        "This is another 400-1 wrong answer.",
                        "This is a 400-1 wrong answer as well."]
                },
                {
                    clue: "This is the 400 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 400-2 wrong answer.",
                        "This is another 400-2 wrong answer.",
                        "This is a 400-2 wrong answer as well."]
                },
                {
                    clue: "This is the 400 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 400-3 wrong answer.",
                        "This is another 400-3 wrong answer.",
                        "This is a 400-3 wrong answer as well."]
                }]
        },
        sixHundred = {
            points: 600,
            clues: [
                {
                    clue: "This is the 600 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 600-1 wrong answer.",
                        "This is another 600-1 wrong answer.",
                        "This is a 600-1 wrong answer as well."]
                },
                {
                    clue: "This is the 600 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 600-2 wrong answer.",
                        "This is another 600-2 wrong answer.",
                        "This is a 600-2 wrong answer as well."]
                },
                {
                    clue: "This is the 600 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 600-3 wrong answer.",
                        "This is another 600-3 wrong answer.",
                        "This is a 600-3 wrong answer as well."]
                }]
        },
        eightHundred = {
            points: 800,
            clues: [
                {
                    clue: "This is the 800 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 800-1 wrong answer.",
                        "This is another 800-1 wrong answer.",
                        "This is a 800-1 wrong answer as well."]
                },
                {
                    clue: "This is the 800 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 800-2 wrong answer.",
                        "This is another 800-2 wrong answer.",
                        "This is a 800-2 wrong answer as well."]
                },
                {
                    clue: "This is the 800 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 800-3 wrong answer.",
                        "This is another 800-3 wrong answer.",
                        "This is a 800-3 wrong answer as well."]
                }]
        },
        oneThousand = {
            points: 1000,
            clues: [
                {
                    clue: "This is the 1000 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a wrong answer.",
                        "This is another wrong answer.",
                        "This is a wrong answer as well."]
                },
                {
                    clue: "This is the 1000 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a wrong answer.",
                        "This is another wrong answer.",
                        "This is a wrong answer as well."]
                },
                {
                    clue: "This is the 1000 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a wrong answer.",
                        "This is another wrong answer.",
                        "This is a wrong answer as well."]
                }]
        }
    ]
}


// When I load the page,
//  I want the entire board
//   to fill itself out.

// Then, there will be 30 tiles consisting of:
// one row of 6 categories
// Each category will be above 5 tiles
// (200, 400, 600, 800, 1000)
// Each of which is a question
// the game will ask the user.
// only the tiles with numbers will be click-able.

// This will return the name of the category passed.
const categorySelection = function (cat) {
    let selectedCat = cat.name;
    console.log(selectedCat);
    return selectedCat;
}

// This will return the description of the category passed.
const categoryDescription = function (cat) {
    let dscrptn = cat.description;
    console.log(dscrptn);
    return dscrptn;
}

// This will return the number of points a clue will add or subtract by
const clueValue = function(num) {
    let value = category.scoreValue[num].points;
    console.log(value);
    return value;
}

// Based on the amount of the score entered, a number will be returned that corresponds to its index among other score values.
const scoreIndex = function(score) {
    let points = (score / 200) - 1;
    return points

}

// This will return a random clue designated to a category's pointValue
const randomClue = function (cat, pts) {
    // let points = scoreIndex(pts);
    let valueInd = cat.scoreValue[scoreIndex(pts)].clues;
    let randIndex = randomIndex(valueInd.length);
    // return cat.scoreValue[points].clues[randIndex].clue;
    return valueInd[randIndex].clue;
}

// This return a random number to be used as a index.
const randomIndex = function (num) {
    return Math.floor(Math.random() * num);
}

// this array's indexes will correlate to where the wrong and right answers are are within the answers array.
let answerKey = [];
// This function will accept a category object and a specific point value,
const answersList = function (cat, pts) {
    // find that category's set of questions for the given point total
    let points = cat.scoreValue[scoreIndex(pts)];
    // this array will temporarily hold a cache of all available (right and wrong) answers
    let answerCache = [];
        // this array will hold a new array comprised of a clue's shuffled answer choices
    let answers = [];
    // // iterate itself a number of times equal to the amount of clues indexed within the category's scoreValue given
    // for (let i = 0; i < points.clues.length; i++) {
        
    // which iterates itself through that clue's answer cache
        for (let i = 0; i <= (points.clues[randomIndex(points.clues.length)].wrongAnswers.length); i++) {
            if (i === (points.clues[randomIndex(points.clues.length)].wrongAnswers.length)) {
                answerCache.push(points.clues[i].correctAnswer);
                console.log(answerCache);
            } else {
                answerCache.push(points.clues[i].wrongAnswers[i]);
                console.log(answerCache);
            }

        }
    // }
}



// when the user clicks a tile,
// a div will appear
// containing a question
    // a random question
    // from a set of questions
    // will be selected
// and four possible answers to the question
    // the possible answers
    // will be generated
    // in a random order
    // and will correspond
    // to a list
    // that identifies the correct answers
// the questions will be on divs themselves
// and will be click-able
// if the user selects one of the wrong answers
    // they will be informed of their mistake
    // a red 'X' pops up
    // the correct answer will highlight itself green
    // and the user's response will turn red
    // the point value associated with their question
    // will be subtracted from their current score
// if the user's response is correct
    // a green check will display
    // their answer will turn green
    // the point value associated with their question
    // will be added to their score
// question's div will disappear
// and the user may select another question.

// if the user clicks on 
    // one of the category tiles
    // a brief description will appear
    // describing the subject matter of that category

// the user's score will be displayed
// in the upper corner
// if the user clicks on it
    // it will display their score 
    // and the user's potential score
    // based on the available value
    // of questions remaining will be displayed
    // underneath it

