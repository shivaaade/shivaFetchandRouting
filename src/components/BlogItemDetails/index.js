// Write your JS code here

import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.finalVal()
  }

  finalVal = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const each = await response.json()
    const newData = {
      id: each.id,
      author: each.author,
      topic: each.topic,
      title: each.title,
      content: each.content,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
    }
    this.setState({blogData: newData})
  }

  render() {
    const {blogData} = this.state

    return (
      <div>
        <h1>{blogData.title}</h1>
        <img alt="img1" src={blogData.avatarUrl} />
        <p>{blogData.author}</p>
        <img alt="img2" src={blogData.imageUrl} />
        <p>{blogData.content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
