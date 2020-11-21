/*import React, { Component } from 'react';

import './App.css';

let styles = {
  margin: 'auto',
  width: '300px'
};
let voteCountStyle = {
  display: 'flex',
  justify: 'center',
  align: 'center',
  padding: '0 5px'
};
let foodNameStyle = {
  width: '200px',
  display: 'flex',
  justify: 'center',
  align: 'center',
  padding: '0 5px'
};


let myButtonStyle = {
  display: 'flex',
  /*justify: 'center',*/ /*
color: 'rgb(57, 116, 3)',

font: '20px',
/*    margin:10px;*/ /*
outline: 'none',
cursor: 'pointer',
padding: '0 5px'
};


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    food: [
      { name: "Meatballs with potatoes",  votes: 0},
      { name: "Spaghetti ",  votes: 0},
      { name: "Pasta ",  votes: 0 },
      { name: "Pizza slice",  votes: 0 },
       { name: "Pizza slice",  votes: 0 }
    ]
  }
}

vote(i) {
  let myChoice = [...this.state.food];
  myChoice[i].votes++;
  
  this.setState({ food: myChoice });
}
unvote(i) {
  let myChoice = [...this.state.food];
  myChoice[i].votes--;
  this.setState({ food: myChoice });
}


render() {
  return (
    <>
      <h2>Today's menu</h2>
      
      <div className="foodList">
      <div class="foodHead">
        <div style={foodNameStyle}>
          <h3>Name of item</h3>
        </div>
        
        <div style={foodNameStyle}>
          <h3>Quantity</h3>
        </div>
        {
          this.state.food.map((option, i) =>
            <div class="foodItem" key={i} >
              <div style={foodNameStyle}>
                {option.name}
              </div>
              <button style={myButtonStyle} onClick={this.vote.bind(this, i)}>+</button>
              <button style={myButtonStyle} onClick={this.unvote.bind(this, i)}>-</button>
              <div style={voteCountStyle}>
                {option.votes}
              </div>
              
            </div>

          )
        }

      </div>

    </>
  )
}
}


export default App; */


/************************ */
/* new code begins */
/*************** */
import React, * as react from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        { name: "Meatballs", votes: 0 },
        { name: "Spaghetti ", votes: 0 },
        { name: "Pasta ", votes: 0 },
        { name: "Pizza slice", votes: 0},
        { name: "Pizza slice", votes: 0}
      ]
    }
  }

  vote(i) {
    let myChoice = [...this.state.food];
    myChoice[i].votes++;
    
   
    this.setState({ food: myChoice });
  }
  unvote(i) {
    let myChoice = [...this.state.food];
    myChoice[i].votes--;
    if (myChoice[i].votes < 0) {
      alert('Sorry!! You cannot reduce Quantity any further!!');
      myChoice[i].votes = 0;
    }
   
    this.setState({ food: myChoice });
  }


  render() {
    return (
      <>
        <h2>Today's menu</h2>

        <div className="foodList">
          <div class="foodHead">
            <div class="menuName">
              <h3>Name of item</h3>
            </div>
            <div class="menuName">
              <h3>Quantity</h3>
            </div>
            
          </div>
          {
            this.state.food.map((option, i) =>
              <div class="foodItem" key={i} >
                <div class="menuName">
                  {option.name}
                </div>
                <div class="voteCount">
                  <div class="countDisplay">
                    {option.votes}
                  </div>
                  <button class="myButton" onClick={this.vote.bind(this, i)}>+</button>
                  <button class="myButton" onClick={this.unvote.bind(this, i)}>-</button>
                </div>

              </div>

            )
          }

        </div>

      </>
    )
  }
}


export default App; 