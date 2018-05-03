import React, {Component} from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class Posts extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      model: {},
      loading: false
    }
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    axios.get("https://react-blog-67ede.firebaseio.com/posts.json").then(res => {
      this.setState({
        model: res.data,
        loading: false
      })
    }).catch(err => {
      this.setState({
        loading: false
      })  
      console.log(err.response)
    })
  }
  render () {
    let posts = <h1 className="loading">Loading...</h1>
    if (!this.state.loading) {
      posts = Object.keys(this.state.model).map(postKey => {
        let post = this.state.model[postKey]
        return (
            <div className="post" key={postKey}>
              <NavLink to={'/'+postKey}>
                <h1>{post.title}</h1>
              </NavLink>
              <p className="post-content">{post.body}</p>
            </div>
        )
      })
    }
    return posts
  }
}

export default Posts;