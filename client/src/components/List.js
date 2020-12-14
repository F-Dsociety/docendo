import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class currentCoursesList extends Component {
  
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
        <h1>connected</h1>
        {this.state.projects.map(project => {
          return (
            <div key={project._id}>
              <h3>
                <Link to={`/projects/${project._id}`}>{project.title}</Link>
              </h3>
            </div>
          )
        })}
      </div>
    )
  }
}
