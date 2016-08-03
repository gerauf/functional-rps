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
