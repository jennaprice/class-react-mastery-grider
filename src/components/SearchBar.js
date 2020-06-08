import React from 'react';

//this is a controlled element
/*
uncontrolled - only the HTML (DOM) would have had the "state" and we would have had to reference the HTML to get the value

controlled - JS maintains a the state of the vaule of the input, so we are not reading data from the HTML

Lecture 84 - more on controlled elements
*/
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmition(this.state.term);
  }// will always make sure the this references / is bound to the class

  /*
  //console.log(this.state.term); 
    -- this doesn't work because of the 'this' reference
    -- produces a common error message

    What is 'this' in a class?

    How is the value of 'this' determined in a function?

    Instance of SearchBar Class: STATE, render, onFormSubmit, this
    Lecture 85

    When you want to determine WHAT the 'this' keyword is referencing you want to look at where the method is called. Lecture 86

  */

  /*

    Solutions
    1) Create a constructor and bind it 
      constructor () {
        this.drive =this.bind.drive(this);// makes a new 'fixed' function with the correct version of this
      }// legacy way to do this
    2) Turn the function onFormSubmit into an arrow fuction
      onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term); // will always make sure the this references / is bound to the class
      }
    3) You can wrap the function you are calling in its own arrow function
      onSubmit={(event) => this.onFormSubmit(event)
      }//must have the parentheses on the on form submit
  */

  render() {
    return (
      <div id="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search-bar-input" className="block"> Image Search</label>
          <input
            id="search-bar-input"
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>);
  }
}

//if you have the input element selected and you hit enter, it will send a post request
export default SearchBar;