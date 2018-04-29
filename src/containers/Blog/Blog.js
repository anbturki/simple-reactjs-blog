import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css'
class Blog extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      model: {},
      loading: false
    }
  }
  render () {
    return (
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/add-post">Add new post</NavLink></li>
        </ul>
        <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/post' render={() => <h1>Post</h1>} />
        <Route path='/add-post' component={NewPost} />
        <Route path='/posts' component={Posts} />
      </div>
    )
  }
}

export default Blog;