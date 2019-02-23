import React from 'react';

const DiceNumbers = ({dice1, dice2}) => {
  return(
  <div className="dice_numbers">
    <div>{dice1}</div>
    <div>{dice2}</div>
  </div>
)
}

export default DiceNumbers;