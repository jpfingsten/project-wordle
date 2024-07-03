import React from 'react';

function GameInput() {
  const [guess, setGuess] = React.useState({guess: ''});

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        console.log(guess);
        setGuess({guess: ''})
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess['guess']}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        onChange={(event) => {
          const nextGuess = {guess: event.target.value.toUpperCase()};

          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GameInput;
