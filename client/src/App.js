import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';
import List from './components/List';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Redirect } from 'react-router-dom';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App" >
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Route
          exact
          path='/dashboard'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <Dashboard {...props} user={this.state.user} />
            }
            else {
              return <Redirect to='/' />
            }
          }}
        />
        <Route
          exact
          path='/projects/' // cuando llame al path /projects/ hace render de List
          render={props => <List />}
        />
        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
