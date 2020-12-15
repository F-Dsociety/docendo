import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import LessonDetails from './components/LessonDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import List from './components/List';
import { Route, Redirect } from 'react-router-dom';
import AddLicense from './components/AddLicense'

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
          path='/current-courses/' // cuando llame al path /projects/ hace render de List
          render={props => <List setUser={this.setUser} {...props}/>}
        />
        <Route
          exact
          path='/lesson/details/:id' // cuando llame al path /projects/ hace render de List
          render={props => <LessonDetails setUser={this.setUser} {...props}/>}
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
        <Route
          exact
          path='/addlicense/:license'
          render={props => <AddLicense user={this.state.user} setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
