# React Quiz App

## Description:
What is better that learning React while learning React? I was studying how to use useReducer instead of useState to create an interactive quiz to help me study React questions. 
Here's how the initial page looks like: 
![](Diagrams/InitialPage.png)

This is the quiz layout; with the question count, point count (questions are weighed differently based on difficuly level), and the timer
![](Diagrams/Pic_2.png)

Because we chose the correct answer, number of points increased, and the correct answer was highlighted in blue, while all other questiosn are orange. When the user clicks on a choice, the "Next" button appears
![](Diagrams/Pic_3.png)

When the user chooses an incorrect answer (clicked "Netflix", but the right answer is "Facebook"), the correct answer is still highlighted, and the number of points does not increase:
![](Diagrams/Wrong-answer.png)

When we reach the final question, instead of the "Next" button "Finish" button appears
![](Diagrams/Finish_button.png)

On the final page, user's results and highscore is displayed. If the user is not satisfied with the score, or simply wants to beat the previous highscore, he can retake the quiz again
![](Diagrams/Final_page.png)

Now, the user beat his previous highscore, so it gets reset:
![](Diagrams/New_highscore.png)

## Directions:
In order for the project to run, clone it and open in Visual Studio Code. Open two terminals. In one, run "npm run server" and in the other "npm start". The former command launches the mock API from which our app pulls the questions
and the latter command runs the application itself.
