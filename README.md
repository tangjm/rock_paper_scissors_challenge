# Setup for Rock Paper Scissors Game and Reflections

## a) Installation
------
1. Fork this repo
2. Clone your forked repo to your local machine
3. Open your cloned repo in your terminal

## b) Setting up the Node server
------
1. Navigate to the folder called `back-end`
2. `npm i` to install server dependencies
3. `node server` to start the server
4. Alternatively, if you have nodemon installed globally, you can start the server with `nodemon server`
   
## c) Setting up the React App
------
1. In another terminal, navigate to the folder called `front-end`
2. `npm i` to install React App dependencies
3. `npm start` to start the React App

Ensure that the Node server and React App are running on different terminals.

## Testing
-------
1. Open the `back-end` folder in your terminal
2. `npm test` to begin the Jest tests in the tests folder


## Overall Plan
-------

1. Use React to render the UI
2. Use the Node server and Express to receive player data and deal with game logic

Plan for how React and Node should interact
-------
1.	GET request made to server; React renders welcome/registration page
2.	Both players register their name
3.	Server receives player names (POST request); React renders game options for Player 1
4.	Player 1’s turn
5.	Server receives Player 1’s choice (POST request); React renders options for Player 2
6.	Player 2’s turn
7.	Server receives Player 2’s choice (POST request), then it redirects to '/results' and calculates and sends back the game result
8.	React renders the results and the option to either “play again" or register new players

Tentative plan for adding two players and two game versions
-------
```
// Registration route
// if singlePlayer button is clicked,
// send a {gameType: "singlePlayer"}
// check if req.body?.gameType is true
// if so, redirect to the /singlePlayer route
// if not, redirect to the /multiPlayer route

// SelectGame route
// The next page that renders should be
// a GameChoicePage 
//  if user selects 'normal', send an object to the server {gameType: "normal"}
// if req.body?.gameType is true, then
// render the GameFields with 3 options
// otherwise, render GameFields with 5 options

// Game route
// The next page that renders should be the GameFields page
// if the game is single player, 
// redirect to the /results route immediately
// We check this by checking the number of players registered at this point in time
// else, wait for the second POST request before redirecting to the /results route

// Results route
// Determine the winner 
// Send back a response that tells React 
// to render the ResultsPage
// with two buttons
// 1. Play again - Returns to GameFieldsPage
// 2. New Game - returns to WelcomePage
```

Reflections
-------
•	determineWinner method
```
// Modular division with negative integers is abnormal in javascript
// e.g. -3 mod 5 = 2 yet according to javascript -3 % 5 = -3
// To account for negative integers, mod(x, y) needs to be mod(mod(x, y) + y), y) to give the correct answer
// 
// Assuming that x and y are s.t. 1 <= x, y <= 5
// and that x and y represent the indexes of game options in the following array:
// ["rock", "paper", "scissors", "spock", "lizard"],
// the calculation for determining if x wins is:  
// mod(mod(x - y, 5), 2)) === 1
```
•	req.app.locals
```
// Inside the scope of our request handler callback functions
// we can only access data stored in req.app.locals
// if we assign them to variables declared using 'let'
```
•	react-bootstrap
```
// Need to figure out how to add validation for radio buttons
```