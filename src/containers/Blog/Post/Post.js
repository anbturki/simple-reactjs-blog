import React,{Component} from 'react';
import axios from 'axios'
class Post extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      post: {},
      loading: false
    }
  }
  componentDidMount () {
    this.setState({
      loading: true
    })
    axios.get(`https://react-blog-67ede.firebaseio.com/posts/${this.props.match.params.id}.json`).then(res => {
      this.setState({
        post: res.data,
        loading: false
      })
    }).catch(err => {
      console.log(err.response)
    })
  }
  render () {
    let post = this.state.loading ? <h1 className="loading">Loading...</h1> : (
      <div className="full-post">
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    )
    return post
  }
}

export default Post;