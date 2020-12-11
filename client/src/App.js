import logo from './logo.svg';
import React from 'react';
import './App.css';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
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
          path='/projects'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <Projects {...props} />
            }
            else {
              return <Redirect to='/' />
            }
          }}
        />
        <Route
          exact
          path='/projects/:id'
          render={props => <ProjectDetails user={this.state.user} {...props} />}
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
