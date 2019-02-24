import React from 'react';

const Property = ({allData, player1, player2}) => {

  if (allData.color !== ""){
    var colorBox = <div className={allData.color}></div>
  }
  else {
    var noColorBox = <div className="no-color"></div>
  }

  if (allData.position === player1){
  var checkPlayer1 = <div className='one'><i class="fas fa-dog"></i></div>
  }

  if (allData.position === player2){
  var checkPlayer2 = <div className='two'><i class="fas fa-car-side"></i></div>
  }

  return(
    <div className="property">
      {colorBox}
      {noColorBox}
      <div className='propertyName'>
      {allData.name}
      </div>
      <div className='player-tokens'>
        {checkPlayer1}
        {checkPlayer2}
      </div>
    </div>
  )

}

export default Property;
