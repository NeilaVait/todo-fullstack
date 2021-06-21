import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar';
import TodoPage from './components/todoPage/todoPage';
import AboutPage from './pages/about';
import ContactsPage from './pages/contact';
import HomePage from './pages/home';
import SingleTodo from './pages/singleTodo';
import NotFound from './pages/404';

// padasyti redirect is / i todos

// app styles
import './app.css';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/* sutikes pirma atitikusi route jis nebeiesko toliau  */}
          <Switch>
            <Route path="/todos/:id" component={SingleTodo}></Route>
            <Route path="/todos" component={TodoPage}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" to="/todos"></Redirect>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactsPage}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>

          {/* <Route path="/" exact component={HomePage}></Route> */}
        </div>
      </div>
    );
  }
}

export default App;
