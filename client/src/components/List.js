import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


export default class List extends Component {
  
  state = {
    projects: []
  }

  getData = () => {
    //const id = this.props.match.params.id;
    axios.get(`/api/projects/`)
      .then(response => {
        console.log(response);
        this.setState({
          projects: response.data
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - Project Not found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getData();
  }

  render(){
    
    return (
      <div>
        <h1>Current Courses</h1>
        {this.state.projects.map(project => {
          return (
            <div key={project._id}>
              <h3>
                <Link to={`/lesson/details/${project._id}`}>{project.title}</Link>
              </h3>
              <p>{project.description}</p>
              {/* <Button onClick={`/lesson/details/${project._id}`}>More Info</Button> */}
            </div>
          )
        })}
      </div>
    )
  }
}
