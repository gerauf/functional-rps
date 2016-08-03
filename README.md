#Functional RPS

Rock paper scissors built using immutable js, react and redux

The method for calculating the winner is taken from the rock paper scissor lizard spock [wikipedia page](https://en.wikipedia.org/wiki/Rock-paper-scissors#Additional_weapons)

> Alternatively, the rankings in rock-paper-scissors-Spock-lizard may be modelled by a comparison of the parity of the two choices. If it is the same (two odd-numbered moves or two even-numbered ones) then the lower number wins, while if they are different (one odd and one even) the higher wins. Using this algorithm, additional moves can easily be added two at a time while keeping the game balanced:

As long as the choices are inputted in the right order this is a simple and extensible way to calculate RPS winning hands.


To play fork and clone the repo then run the following commands:
```
npm install
webpack-dev-server
```
then visit [localhost:8080](http://localhost:8080/)

To run the tests type the following into your terminal
```
npm run test
```

The game is implemented with three rule sets - standard RPS, Spock and a homemade option called starwars. Due to the way the game is constructed add new rule sets would be very straightforward, simply updating the initial state the redux store starts with would be enough.

Future updates would include:
- icons for each option - an additional branch in the state tree would be needed to accommodate this but it would be fairly straight forward to implement.
- animations, as this would be a side-effect I would look to use thunk or saga to manage this (which would require learning them first!)
- build your own rule set, user could input names and images and create custom rules
- sync with local storage
