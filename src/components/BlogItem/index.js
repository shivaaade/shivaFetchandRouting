// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItem extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.finalList()
  }

  finalList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const newData = data.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      topic: each.topic,
      title: each.title,
    }))
    this.setState({blogList: newData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <ul>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogList.map(each => (
            <li key={each.id}>
              <Link to={`/blogs/${each.id}`}>
                <img className="img1" alt="img" src={each.imageUrl} />
                <p>{each.topic}</p>
                <h1>{each.title}</h1>
                <img className="img2" alt="img2" src={each.avatarUrl} />
                <p>{each.author}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    )
  }
}

export default BlogItem
