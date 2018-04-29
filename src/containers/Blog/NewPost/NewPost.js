import React, {Component} from 'react'
import axios from 'axios'
import './NewPost.css'
class NewPost extends Component {

  constructor (props)
  {
    super(props);
    this.state = {
      form: {
        title: '',
        body: ''
      }
    }
    this.savePost = this.savePost.bind(this)
  }
  savePost (e) {
    e.preventDefault()
    if (!this.state.form.title || !this.state.form.body)
    {
      alert("Please fill the form!");
      return
    }
    axios.post('https://react-blog-67ede.firebaseio.com/posts.json', this.state.form).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.response)
    })
  }
  onInputChange (e, field) {
    let form = { ...this.state.form }
    form[field] = e.target.value
    this.setState({
      form: form
    })
  }
  render () {
    return (
      <div className="NewPost">
        <form>
          <input onChange={e => this.onInputChange(e, 'title')} placeholder="Post title"/>
          <br/>
          <textarea onChange={e => this.onInputChange(e, 'body')} placeholder="Post body"></textarea>
          <button onClick={this.savePost}>Save</button>
        </form>
      </div>
    )
  }
}

export default NewPost;