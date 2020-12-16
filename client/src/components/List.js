import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
//import { Button } from 'react-bootstrap';


export default class List extends Component {
  
  state = {
    lessons: []
  }

  getData = () => {
    //const id = this.props.match.params.id;

    axios.get(`/api/lesson`)
      .then(response => {
        console.log(response);
        this.setState({
          lessons: response.data
        })
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: 'Not found'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getData();
  }

  render(){
    
    console.log(this.props);

    return (
      <div>
        <h1>Current Courses</h1>
        <div className="current-courses-list-container">
          {this.state.lessons.map(element => {
            return (
              <div key={element._id} className="course-container">
                <h3>
                  <Link to={`/lesson/details/${element._id}`}>{element.title}</Link>
                </h3>
                <p>{element.description}</p>
                {/* <Button onClick={`/lesson/details/${project._id}`}>More Info</Button> */}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
