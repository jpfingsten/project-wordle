import React from 'react';

function Guesses({pastGuesses}) {

  return (
    <div className="guess-results">
      {pastGuesses.map(guess => (
        <p key={guess['id']} className="guess">{guess['word']}</p>
      ))}
    </div>
  );
}

export default Guesses;
