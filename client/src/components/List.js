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
      .then(res => {
        console.log(res);
        this.setState({
          lessons: res.data
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
        <h1>Explore Lessons</h1>
        <div className="current-courses-container">
          {this.state.lessons.map(element => {
            return (
              <div key={element._id} className="course-container">
                <h3>
                  <Link to={`/lesson/details/${element._id}`}>{element.title}</Link>
                </h3>                
                {/* <h5>by {this.lessons.firstname}</h5> */}
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
