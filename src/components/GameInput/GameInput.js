import React from 'react';

function GameInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        console.log('guess: ' + guess);
        setGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();

          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GameInput;
