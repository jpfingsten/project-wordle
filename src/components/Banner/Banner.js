import React from 'react';

function Banner({gameWon, numOfGuesses, answer}) {

  const bannerType = gameWon ? "happy" : "sad";

  return (
    <div className={`${bannerType} banner`}>
      {bannerType === "happy"
      ? <span><b>Congratulations!</b> You got the answer in <b>{numOfGuesses} guesses</b>.</span>
      : <span>Sorry, the correct answer is <b>{answer}</b>.</span>}
    </div>
  );
}

export default Banner;
