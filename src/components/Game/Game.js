import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses';
import GameInput from '../GameInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [pastGuesses, setPastGuesses] = React.useState([]);

  return (
    <>
      <Guesses pastGuesses={pastGuesses} />
      <GameInput pastGuesses={pastGuesses} setPastGuesses={setPastGuesses} />
    </>
  )
}

export default Game;
