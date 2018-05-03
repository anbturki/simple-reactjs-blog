import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import Post from './Post/Post'
import Nav from './UI/Nav/Nav'
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
        <Nav />
        <Switch>
          <Route path='/' exact component={Posts} />
          <Route path='/post' render={() => <h1>Post</h1>} />
          <Route path='/add-post' component={NewPost} />
          <Route path='/:id' component={Post} />
        </Switch>    
      </div>
    )
  }
}

export default Blog;