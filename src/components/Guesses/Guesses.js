import React from 'react';

function Guesses({pastGuesses}) {
  return (
    <div className="guess-results">
      {pastGuesses.map((guess, index) => (
        <p key={index} className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default Guesses;
