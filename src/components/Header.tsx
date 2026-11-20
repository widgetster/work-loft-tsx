import { Link } from 'react-router'
import './Header.css'



export function Header() {

  return (
    <header className="header-container">

      <div className="header-bg">
        <Link to="/" >
          <div className="header-left-container">
            <img className="header-logo-img" src="icon/logo.png" />
            <p className="header-workloft-p">WorkLoft</p>
          </div>
        </Link>

        <div className="header-middle-container">
          <Link to="/spaces">Spaces</Link>
          <Link to="/memberships">Memberships</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/resources">Resources</Link>
        </div>

        <button className="book-a-tour-button">Book a Tour</button>
      </div>
    </header>
  )
} 