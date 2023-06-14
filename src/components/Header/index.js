// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/" className="link-item">
      Home
    </Link>
    <Link to="/about" className="link-item">
      About
    </Link>
  </nav>
)

export default Header
