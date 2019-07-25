
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'

class Post extends Component {
    render() {
      return (

        <div className="all-news">
          <div className="card">
          
            <img class="card-img-top" src={this.props.value.urlToImage}></img>

            <div class="card-body">
              <h1 className="card-title">{this.props.value.title}</h1>
              <p className="card-text"> {this.props.value.description} </p>
              <a href={this.props.value.url} target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      )
    }
  }
  export default Post;