// Sample questions and options
const quizData = [{
        question: `How many times in a day, are the hands of a clock in straight line but opposite in direction?`,
        options: ["20", "22", "24", "48"],
        correctAnswer: "22",
        topic: "clock",
        explanation: `The hands of a clock point in opposite directions (in the same straight line) 11 times in every 12 hours. 
                        (Because between 5 and 7 they point in opposite directions at 6 o'clcok only).
                        So, in a day, the hands point in the opposite directions 22 times.`,
    },
    {
        question: `How many times in a day, the hands of a clock are straight?`,
        options: ["22", "24", "44", "48"],
        correctAnswer: "44",
        topic: "clock",
        explanation: `In 12 hours, the hands coincide or are in opposite direction 22 times.
                    In 24 hours, the hands coincide or are in opposite direction 44 times a day.`
    },
    {
        question: `The ratio between the length and the breadth of a rectangular park is 3 : 2. 
                    If a man cycling along the boundary of the park at the speed of 12 km/hr completes one round in 8 minutes, 
                    then the area of the park (in sq. m) is:`,
        options: ["15360", "153600", "30720", "307200"],
        correctAnswer: "153600",
        topic: "Area",
        explanation: `Perimeter = Distance covered in 8 min. = 12000 x 8/60
                      perimeter = 1600 m.
                      Let length = 3x metres and breadth = 2x  metres.
                      Then, 2(3x + 2x) = 1600 or x = 160.
                      Length = 480 m and Breadth = 320 m.
                      Area = (480 x 320) m2 = 153600 m2.`,
    },
    {
        question: `An error 2% in excess is made while measuring the side of a square. 
                    The percentage of error in the calculated area of the square is:`,
        options: ["2%", "2.02%", "4%", "4.04%"],
        correctAnswer: "4.04%",
        topic: "Area",
        explanation: `100 cm is read as 102 cm.
                      A1 = (100 x 100) cm2  and A2 (102 x 102) cm2.
                     (A2 - A1) = [(102)2 - (100)2]
                     = (102 + 100) x (102 - 100)
                     = 404 cm2.
                     Percentage error =404 x 100% = 4.04% `,
    },
    {
        question: `What is the least number of squares tiles required to pave 
                    the floor of a room 15 m 17 cm long and 9 m 2 cm broad?`,
        options: ["814", "820", "840", "844"],
        correctAnswer: "814",
        topic: "Area",
        explanation: `Length of largest tile = H.C.F. of 1517 cm and 902 cm = 41 cm.
                    Area of each tile = (41 x 41) cm2.
                    Required number of tiles = (1517 x 902) / (41x41)
                    = 814.`,
    },
    {
        question: `A tank is 25 m long, 12 m wide and 6 m deep. The cost of plastering 
                    its walls and bottom at 75 paise per sq. m, is:`,
        options: ["456", "458", "558", "568"],
        correctAnswer: "558",
        topic: "Area",
        explanation: `Area to be plastered
                = [2(l + b) x h] + (l x b)
                = {[2(25 + 12) x 6] + (25 x 12)} m2
                = (444 + 300) m2
                = 744 m2.
                Cost of plastering = Rs. 744 x75/100
                = Rs. 558.`,
    },
    {
        question: `If a quarter kg of potato costs 60 paise,
                     how many paise will 200 gm cost?`,
        options: ["48", "54", "56", "72"],
        correctAnswer: "48",
        topic: "Chain Rule",
        explanation: `Let the required weight be x kg.
                    Less weight, Less cost (Direct Proportion)
                    250 : 200 :: 60 : x 
                    250 x x = (200 x 60)
                    x= (200 x 60)/250
                    x = 48.`,
    },
    {
        question: `In a camp, there is a meal for 120 men or 200 children. 
                    If 150 children have taken the meal, how many men will be catered to with remaining meal?`,
        options: ["20", "30", "40", "50"],
        correctAnswer: "30",
        topic: "Chain Rule",
        explanation: `There is a meal for 200 children. 150 children have taken the meal.
                    Remaining meal is to be catered to 50 children.
                    Now, 200 children  120 men. 
                    50 children = 120x 50/200
                    = 30 men.`,
    },
    {
        question: `36 men can complete a piece of work in 18 days. 
                    In how many days will 27 men complete the same work?`,
        options: ["12", "18", "22", "24"],
        correctAnswer: "24",
        topic: "Chain Rule",
        explanation: `Let the required number of days be x.
                    Less men, More days (Indirect Proportion)
                    27 : 36 :: 18 : x
                    27 x x = 36 x 18
                    x = 36 x 18/27
                    x = 24.`,
    },
    {
        question: `The sum of ages of 5 children born at the intervals of 3 years each is 50 years. 
                    What is the age of the youngest child?`,
        options: ["4", "8", "10", "None of these"],
        correctAnswer: "4",
        topic: "Problem on Ages",
        explanation: `Let the ages of children be x, (x + 3), (x + 6), (x + 9) and (x + 12) years.
                    Then, x + (x + 3) + (x + 6) + (x + 9) + (x + 12) = 50
                    5x = 20
                    x = 4.
                    Age of the youngest child = x = 4 years.`,
    },
    {
        question: `A is two years older than B who is twice as old as C. 
                If the total of the ages of A, B and C be 27, the how old is B?`,
        options: ["7", "8", "10", "9"],
        correctAnswer: "10",
        topic: "Problem on Ages",
        explanation: `Let C's age be x years. Then, B's age = 2x years. A's age = (2x + 2) years.
                    (2x + 2) + 2x + x = 27
                    5x = 25
                    x = 5.
                    Hence, B's age = 2x = 10 years.`,
    },
    {
        question: `A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:`,
        options: ["14 years", "18 years", "20 years", "22 years"],
        correctAnswer: "22",
        topic: "Problem on Ages",
        explanation: `Let the son's present age be x years. Then, man's present age = (x + 24) years.
                    (x + 24) + 2 = 2(x + 2)
                    x + 26 = 2x + 4
                    x = 22.`,
    },
    {
        question: `A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, 
                    find the time taken by the boat to go 68 km downstream.`,
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        topic: "Boat and Stream",
        explanation: `Speed downstream = (13 + 4) km/hr = 17 km/hr.
                        Time taken to travel 68 km downstream = 68/17
                        hrs = 4 hrs.`,
    },
    {
        question: `A man's speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. 
                    The man's speed against the current is:`,
        options: ["8.5 km/hr", "9 km/hr", "10 km/hr", "12.5 km/hr"],
        correctAnswer: "10 km/hr",
        topic: "Boat and Stream",
        explanation: `Man's rate in still water = (15 - 2.5) km/hr = 12.5 km/hr.
                     Man's rate against the current = (12.5 - 2.5) km/hr = 10 km/hr.`,
    },
    {
        question: `The speed of a boat in still water in 15 km/hr and the rate of current is 3 km/hr. 
                    The distance travelled downstream in 12 minutes is:`,
        options: ["1.2 km", "1.8 km", "2.4 km", "3.6 km"],
        correctAnswer: "3.6 km",
        topic: "Boat and Stream",
        explanation: `Speed downstream = (15 + 3) kmph = 18 kmph.
        Distance travelled = 18x12/60 km = 3.6 km.`,
    },
    {
        question: `The average of 20 numbers is zero. Of them, at the most, 
                    how many may be greater than zero?`,
        options: ["0", "1", "10", "19"],
        correctAnswer: "19",
        topic: "Average",
        explanation: `Average of 20 numbers = 0.
                Sum of 20 numbers (0 x 20) = 0.
                It is quite possible that 19 of these numbers may be positive and 
                if their sum is 'a' then 20th number is (-a).`,
    },
    {
        question: `The average weight of A, B and C is 45 kg. 
                    If the average weight of A and B be 40 kg and that of B and C be 43 kg, 
                    then the weight of B is:`,
        options: ["17 kg", "20 kg", "26 kg", "31 kg"],
        correctAnswer: "31 kg",
        topic: "Average",
        explanation: `Let A, B, C represent their respective weights. Then, we have:
                        A + B + C = (45 x 3) = 135 .... (i)
                        A + B = (40 x 2) = 80 .... (ii)
                        B + C = (43 x 2) = 86 ....(iii)
                        Adding (ii) and (iii), we get: A + 2B + C = 166 .... (iv)
                        Subtracting (i) from (iv), we get : B = 31.
                        B's weight = 31 kg.`,
    },
    {
        question: `The average weight of 8 person's increases by 2.5 kg when a new person comes in 
                    place of one of them weighing 65 kg. What might be the weight of the new person?`,
        options: ["76 kg", "76.5 kg", "85 kg", "80 kg"],
        correctAnswer: "85 kg",
        topic: "Average",
        explanation: `Total weight increased = (8 x 2.5) kg = 20 kg.
                        Weight of new person = (65 + 20) kg = 85 kg.`,
    },
    {
        question: `A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?`,
        options: ["230 m", "240 m", "260 m", "270 m"],
        correctAnswer: "270 m",
        topic: "Problems on train",
        explanation: `Speed = 72 x5/18 m/sec = 20 m/sec.
                    Time = 26 sec.
                    Let the length of the train be x metres.
                    Then, x + 250 = 20 x 26
                    x + 250 = 520
                    x = 270.`,
    },
    {
        question: `A 300 metre long train crosses a platform in 39 seconds while it crosses a signal pole in 18 seconds. What is the length of the platform?`,
        options: ["320 m", "350 m", "650 m", "370 m"],
        correctAnswer: "350 m",
        topic: "Problems on train",
        explanation: `Speed = 300/18
                    Speed = 50/3 m/sec.
                    Let the length of the platform be x metres.
                    Then,
                    (x + 300)/39 = 50/3
                    3(x + 300) = 1950
                    x = 350 m.`,
    },
    {
        question: `Two trains of equal lengths take 10 seconds and 15 seconds respectively to cross a telegraph post. If the length of each train be 120 metres, in what time (in seconds) will they cross each other travelling in opposite direction?`,
        options: ["10", "12", "15", "20"],
        correctAnswer: "12",
        topic: "Problems on train",
        explanation: `Speed of the first train = 120/10 m/sec = 12 m/sec.
                    Speed of the second train = 120/15
                    m/sec = 8 m/sec.
                    Relative speed = (12 + 8) = 20 m/sec.
                    Required time =(120 + 120)/20
                    sec = 12 sec.`,
    },
    {
        question: `Two trains are running in opposite directions with the same speed. If the length of each train is 120 metres and they cross each other in 12 seconds, then the speed of each train (in km/hr) is:`,
        options: ["18", "10", "36", "72"],
        correctAnswer: "36",
        topic: "Problems on train",
        explanation: `Let the speed of each train be x m/sec.
                Then, relative speed of the two trains = 2x m/sec.
                So, 2x = (120 + 120)/12
                2x = 20
                x = 10.
                Speed of  each train = 10 m/sec = 10 x18/5
                km/hr = 36 km/hr.`,
    },
    {
        question: `Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:`,
        options: ["39,30", "41,32", "42,33", "43,34"],
        correctAnswer: "42,33",
        topic: "Percentage",
        explanation: `Let their marks be (x + 9) and x.
                Then, x + 9 = 56/100(x + 9 + x)
                25(x + 9) = 14(2x + 9)
                3x = 99
                x = 33
                So, their marks are 42 and 33.`,
    },
    {
        question: `A student multiplied a number by 3/5 instead of 5/3
                    What is the percentage error in the calculation?`,
        options: ["34%", "44%", "54%", "64%"],
        correctAnswer: "64%",
        topic: "Percentage",
        explanation: `Let the number be x.
                Error = (5 X/3)-(3 X/5) / (5/3) = 0.64
                Error% = 0.64 x 100 = 64%`,
    },
    {
        question: `Three candidates contested an election and received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?`,
        options: ["57%", "60%", "65%", "70%"],
        correctAnswer: "57%",
        topic: "Percentage",
        explanation: `Total number of votes polled = (1136 + 7636 + 11628) = 20400.
                Required percentage =
                11628/20400 x 100 % = 57%.`,
    },


    // Add more questions and options here
];

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const questionLinksContainer = document.getElementById("question-links");


let currentQuestionIndex = 0;
let questionStartTime = 0;
let questionElapsedTime = 0;
const questionTimes = [];
const selectedUserOptions = [];
const selectedOptions = new Array(quizData.length).fill(null);

let score = 0;
//Function to load a new question
function loadQuestion(index) {
    const question = quizData[index];
    questionText.textContent = question.question;

    // Update the question number
    const questionNumber = index + 1;
    document.getElementById("question-number").textContent = `Question ${questionNumber}:`;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Add options dynamically
    question.options.forEach((option, i) => {
        const optionLabel = document.createElement("label");
        optionLabel.className = "option";
        optionLabel.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsContainer.appendChild(optionLabel);

        if (selectedUserOptions[index] === option) {
            optionLabel.querySelector('input[type="radio"]').checked = true;
        }
    });
    // Display the previously marked answers for the current question
    document.getElementById("marked-answer").textContent = `Selected: ${selectedUserOptions[index] || 'None'}`;

    createQuestionLinks();
    //Start the timer for the current question
    questionStartTime = Date.now();
}

function formatTime(questionElapsedTime) {
    const seconds = Math.floor(questionElapsedTime / 1000); // Convert milliseconds to seconds

    if (seconds < 60) {
        return `${seconds}s`;
    } else {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        if (remainingSeconds === 0) {
            questionElapsedTime = `${minutes}m`;
        } else {
            `${minutes}m ${remainingSeconds}s`;
        }
    }
}

// Function to handle the next button click
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        selectedUserOptions[currentQuestionIndex] = undefined; // Set selected option to null
        questionTimes.push(undefined); // Set elapsed time to undefined
        currentQuestionIndex++;
    } else {
        const userAnswer = selectedOption.value;
        selectedUserOptions[currentQuestionIndex] = userAnswer;


        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            score = score + 1;
        }
        // Stop the timer and record elapsed time
        const questionElapsedTime = Date.now() - questionStartTime;
        const formattedTime = formatTime(questionElapsedTime);
        questionTimes.push(formattedTime);

        // Move to the next question
        currentQuestionIndex++;
    }

    if (currentQuestionIndex < quizData.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // Last question: Create and display the submit button
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.id = "submit-button";
        submitButton.className = "btn btn-submit btn-primary";
        submitButton.addEventListener("click", redirectToAnalysis);

        // Append the submit button to the question container
        questionContainer.innerHTML = "";
        questionContainer.appendChild(submitButton);
    }

    // Clear the selected option
    selectedOptions.checked = false;

}

function redirectToAnalysis() {
    window.location.href = "analysis.html";
}

// Initialize the quiz
loadQuestion(currentQuestionIndex);
let activeQuestionLink = null;
// Create question links 
function createQuestionLinks() {
    questionLinksContainer.innerHTML = "";
    quizData.forEach((_, index) => {
        const questionLink = document.createElement("button");
        questionLink.className = "btn btn-question-link";
        questionLink.textContent = index + 1;

        questionLink.addEventListener("click", () => {

            currentQuestionIndex = index;
            loadQuestion(currentQuestionIndex);
            document.getElementById("marked-answer").textContent = `Selected: ${selectedUserOptions[currentQuestionIndex] || 'None'}`;


        });

        if (selectedUserOptions[index] !== undefined) {
            questionLink.classList.add("answered"); // Apply the answered class
        } else {
            questionLink.classList.add("unanswered"); // Apply the unanswered class
        }
        if (index === currentQuestionIndex) {
            questionLink.classList.add("active"); // Apply the active class to the current question link
        }

        questionLinksContainer.appendChild(questionLink);
    });
}

// Initialize the quiz by creating question links
createQuestionLinks();
// call nextQuestion
nextButton.addEventListener("click", nextQuestion);

function displayQuizAnalysis() {
    const analysisContainer = document.getElementById("analysis-container");

    quizData.forEach((question, index) => {
        const analysisDiv = document.createElement("div");
        const isCorrect = selectedUserOptions[index] === question.correctAnswer;

        analysisDiv.className = isCorrect ? "correct" : "wrong";
        analysisDiv.innerHTML = `
        <p>Question ${index + 1}: ${question.question}</p>
                    <p>Selected Option: ${selectedUserOptions[index] || 'None'}</p>
                    <p>Correct Answer: ${question.correctAnswer}</p>
                    <p>Explanation: ${question.explanation}</p>
                    <p>Time Taken: ${questionTimes[index] || 'Not answered'}</p>
                `;

        analysisContainer.appendChild(analysisDiv);
    });
}

// Call the function to display quiz analysis
displayQuizAnalysis();