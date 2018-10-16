import React, { Component } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoFilter from "./ToDoFilter";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToDoForm } />
        <ToDoFilter  />
        <ToDoList />
      </div>
    );
  }
}

export default App;
