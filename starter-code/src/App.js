import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    fiveContacts: contacts.splice(0, 5), // cuts the contact array and leaves indexes 0-5
    allContacts: contacts, // contains the rest of the contacts
  };

  clickMethod = () => {
    let randoNum = Math.floor(Math.random() * this.state.allContacts.length);
    let randoCont = this.state.allContacts[randoNum];
    console.log(randoNum, randoCont);
    
    let fiveContactsCopy = [...this.state.fiveContacts];
    fiveContactsCopy.push(randoCont);

    let allContactsCopy = [...this.state.allContacts]
    allContactsCopy.splice(randoNum, 1)

    console.log(allContactsCopy)

    this.setState({
      fiveContacts: fiveContactsCopy,
      allContacts: allContactsCopy
    });
  };

sortName = () => {
  let currentArr = [...this.state.fiveContacts].sort((a,b) => a.name.localeCompare(b.name))
  this.setState({
    fiveContacts:currentArr
  })
}

sortPop = () => {
  let currentArr = [...this.state.fiveContacts].sort((b,a) => b.popularity-a.popularity)
  this.setState({
    fiveContacts:currentArr
  })
}



  displayFive = () => {
    // sets the tr and td tags for the table
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={eachContact.name}>
          <td><img width="50px" src={eachContact.pictureUrl} alt="actor" /></td>
          <td>{eachContact.name} {index}</td> 
          <td>{eachContact.popularity}</td>
          <td><button onClick={() => this.delAct(index)}>Delete</button></td>
        </tr>
      );
    });
  };

  delAct = (index) => {
    let currentArr = [...this.state.fiveContacts]
    currentArr.splice(index,1)
    this.setState({fiveContacts:currentArr})
  }

  render() {
    console.log(this.state.fiveContacts);
    return (
      <div className="App">
        <h1>ironContact</h1>
        <section id="buttons">
          <button type="button" onClick={this.clickMethod}> Add Random Contact!</button>
          <button type = "button" onClick={this.sortName}>Sort by Name!</button>
          <button type = "button" onClick={this.sortPop}>Sort by popularity!</button>
        </section>
        <table>
          <thead>
            <tr>
              <th> Picture </th>
              <th> Name </th>
              <th> Popularity </th>
            </tr>
          </thead>
          <tbody>{this.displayFive()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
