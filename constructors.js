
// 1) Create a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
// b. model (string): The model of the car, e.g., "Camry". 
// c. year (number): The year the car was manufactured, e.g., 2020. 
// d. isAvailable (boolean): Indicates if the car is currently available for rent. 
// The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 
class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
}

// 2) Create a Rental class or function constructor that has the following properties: 
// ● car (Car object): The car that has been rented. 
// ● renterName (string): The name of the person who rented the car. 
// ● rentalStartDate (Date object): The start date of the rental period.
//  ● rentalEndDate (Date object): The end date of the rental period
  
  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration() {
        const durationInMilliseconds = this.rentalEndDate - this.rentalStartDate
        const durationInDays = Math.ceil(durationInMilliseconds / (1000 * 60 * 60 * 24));
        return durationInDays;
        
    }
    
    
      
    
}
// 3) Create an instance of the Car class or function constructor for a car in the inventory. 
// Then, create an instance of the Rental class or function constructor for a rental involving the car you created. 
// Finally, calculate the rental duration using the calculateRentalDuration method.


const car = new Car("Jeep", "Aine", 2020, true);
console.log({car});
const rental = new Rental(car, "patri", new Date("2024-03-28"), new Date("2024-04-26"));
const rentalDuration = rental.calculateRentalDuration();

console.log(rentalDuration); 


// 1. Create a Question class with the following properties: 
// ● text(string): The text of the question. 
// ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question. 
// The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise. 
// 2. Create a Quiz class with the following properties: 
// ● questions(array):An array of Question objects. 
// ● currentQuestionIndex(number): The index of the current question in the questions array. 
// ● score(number): The user’s current score. 
// The Quiz class should have the following methods: 
// ● addQuestion: Takes a Question object as a parameter and adds it to the questions array. 
// ● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex. 
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class, and updates the score if the answer is correct.




class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  addQuestion(question) {
    this.questions.push("functions of Java");
  }

}
const questions = [
  {
    text: "What is the color of soil?",
    options: ["blue", "brown", "black", "grey"],
    correctAnswer: "brown"
  },
  {
    text: "What is the deepest lake  in Africa?",
    options: ["Lake Bunyonyi", "Lake Victoria", "lake Naivasha", "lake Turkana"],
    correctAnswer: "lake Bunyonyi"
  },
  
];
let score = 0
for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  console.log(question.text);
  console.log("Options: " + question.options.join(", "));
  const userAnswer = "Kenya";
  if (userAnswer === question.correctAnswer) {
    score++;
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
}
console.log("Your score: " + score);


