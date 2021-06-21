import React, { Component } from 'react';
import GetSendData from '../service/getSendData';
class FetchTest extends Component {
  state = {
    todoTitle: '',
    todos: [],
  };

  syncTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    GetSendData.getAll((data) => this.setState({ todos: data }));
  };

  handleNewTodo = () => {
    console.log('veikia new todo');
    GetSendData.createTodo(this.state.todoTitle, (ats) => {
      console.log('ats is create', ats);
      this.getTodos();
      this.setState({ todoTitle: '' });
    });
  };

  render() {
    return (
      <div>
        <h1>Fetch test</h1>
        <input
          onChange={this.syncTitle}
          value={this.state.todoTitle}
          type="text"
          placeholder="add new todo"
        />
        <button onClick={this.handleNewTodo}>Save New Todo </button>
        <ul>
          {this.state.todos.map((t) => (
            <li key={t._id}>{t.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchTest;
