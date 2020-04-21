import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  
state = {
  fiveContacts: contacts.slice(0, 5) // cuts the contact array and leaves indexes 0-5
}

displayFive = () => {
  let newArr = this.state.fiveContacts.map(eachContact => {
    return(
      <tr key = {eachContact.name}>
      <td><img width = "50px" src={eachContact.pictureUrl} alt="actor"/></td>
      <td>{eachContact.name}</td>
      <td>{eachContact.popularity}</td>
   </tr>
    )
  })
  return newArr
}

  render() {
    console.log(this.state.fiveContacts)
    return (
      <div className="App">
       <table>
         <thead>
           <tr>
             <th> Picture </th>
             <th> Name </th>
             <th> Popularity </th>
           </tr>
         </thead>
         <tbody>
         {this.displayFive()}
         </tbody>
       </table>
      </div>
    );
  }
}

export default App;
