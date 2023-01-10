import UserInfo from '../UserInfo'
import BlogItem from '../BlogItem'
import './index.css'

const Home = () => (
  <div testid="loader" className="home-container">
    <UserInfo />
    <BlogItem />
  </div>
)

export default Home
