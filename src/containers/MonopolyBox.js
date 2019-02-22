import React, {Component} from 'react';
import data from '../data.js';
import MonopolyList from '../components/MonopolyList';

class MonopolyBox extends Component {
  constructor(props){
    super(props);
    this.state = data
    }

    dice_roll(){
      const dice1 = Math.floor(Math.random() * (6) +1);
      const dice2 = Math.floor(Math.random() * (6) +1);
      const total = dice1 + dice2
      if (dice1 === dice2){
        console.log("Double");
      }
      console.log(dice1);
      console.log(dice2);
      console.log(total);
    }

  render(){

    this.dice_roll()

    const row1 = this.state.properties.filter((property) => {
      return property.row === 1
    });
    console.log(row1);

    const row2 = this.state.properties.filter((property) => {
      return property.row === 2
    });
    console.log(row2);

    const row3 = this.state.properties.filter((property) => {
      return property.row === 3
    });
    console.log(row3);

    const row4 = this.state.properties.filter((property) => {
      return property.row === 4
    });
    console.log(row4);

    return(
      <div className="monopoly-box">
      <MonopolyList properties={row1} players={this.state.players}/>
      <MonopolyList properties={row2} players={this.state.players}/>
      <MonopolyList properties={row3} players={this.state.players}/>
      <MonopolyList properties={row4} players={this.state.players}/>
      </div>
    )
  }
}

export default MonopolyBox;
