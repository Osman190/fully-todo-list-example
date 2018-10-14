import React, { Component } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import uuid from "uuid/v4";

class App extends Component {
  state = {
    itemsToDo: {}
  };
  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };
    this.setState(state => {
      state.itemsToDo[todo.uuid] = todo;
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList items={this.state.itemsToDo} />
      </div>
    );
  }
}

export default App;
