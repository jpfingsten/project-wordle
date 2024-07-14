import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import GameInput from '../GameInput';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [pastGuesses, setPastGuesses] = React.useState([]);
  const numOfGuesses = pastGuesses.length;
  const gameWon = pastGuesses[pastGuesses.length - 1] === answer ? true : false;
  const gameEnded = pastGuesses.length === 6 || gameWon === true;

  return (
    <>
      <GuessResults pastGuesses={pastGuesses} answer={answer} />
      <GameInput pastGuesses={pastGuesses} setPastGuesses={setPastGuesses} gameEnded={gameEnded} />
      {gameWon || numOfGuesses >=6 ? <Banner gameWon={gameWon} numOfGuesses={numOfGuesses} answer={answer}/> : undefined}
    </>
  )
}

export default Game;