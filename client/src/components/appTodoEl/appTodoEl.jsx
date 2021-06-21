import React, { Component } from 'react';
import './style.css';
import SimpleAlert from '../common/alert/alert';

class AppTodoEl extends Component {
  // padaryti kad ikonele butu priklausoma nuo isDone savybes
  // fa-check-circle - done  fa-circle-thin - kai ne done

  // paspaudus pirma icona bublinam eventa iki app.jsx ir ten vygdom handleCheckUncheck
  state = {
    editTitle: this.props.singleTodo.title,
    onOf: true,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  hideAlert = () => {
    this.setState({ onOf: false });
  };

  showAlertAndSendProps = () => {
    const { _id: id, isEditOn } = this.props.singleTodo;
    this.setState({ onOf: true });
    this.props.onEdit(id, this.state.editTitle, isEditOn);
  };

  render() {
    const { _id: id, title, isDone, isEditOn } = this.props.singleTodo;

    const spanOrTodo = isEditOn ? (
      <input
        className={this.props.errors && 'is-invalid'}
        type="text"
        value={this.state.editTitle}
        onChange={this.handleChange}
      />
    ) : (
      <span className={isDone ? 'doneTitle' : ''}>{title}</span>
    );
    // salyga ? true : false; terenary operator
    // salyga === true && rodom kas yra cia
    return (
      <li className="app-todo-el">
        {!isEditOn && (
          <i
            onClick={() => this.props.onDoneUndone(id, !isDone)}
            className={this.setCheckClasses(isDone)}
          ></i>
        )}

        {spanOrTodo}
        {!isDone && <i onClick={this.showAlertAndSendProps} className="fa fa-pencil"></i>}

        {isEditOn && this.props.errors && this.state.onOf && (
          <SimpleAlert hideAlert={this.hideAlert}>{this.props.errors}</SimpleAlert>
        )}

        <i onClick={() => this.props.onDelete(id)} className="fa fa-trash"></i>
      </li>
    );
  }

  setCheckClasses(isDone) {
    let checkClasses = 'fa fa-circle-thin';
    if (isDone) checkClasses = 'fa fa-check-circle';
    return checkClasses;
  }
}

export default AppTodoEl;
