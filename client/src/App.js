import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Navbar         from './components/Navbar';
import Signup         from './components/Signup';
import Login          from './components/Login';
import Dashboard      from './components/dashboard/';
import LessonDetails  from './components/LessonDetails';
import List           from './components/List';
import AddLicense     from './components/AddLicense'

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
          path='/current-lessons/' 
          render={props => <List {...props} user={this.state.user}/>}
        />
        <Route
          exact
          path='/lesson/details/:id' 
          render={props => <LessonDetails setUser={this.setUser} user={this.state.user} {...props}/>}
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
