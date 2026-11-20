import { Link, NavLink } from 'react-router'
import './Header.css'



export function Header() {

  return (
    <header className="header-container">

      <div className="header-bg">
        <Link to="/" >
          <div className="header-left-container">
            <img className="header-logo-img" src={`${import.meta.env.BASE_URL}icon/logo.png`} alt="" />
            <p className="header-workloft-p">WorkLoft</p>
          </div>
        </Link>

        <nav className="header-middle-container" aria-label="Main navigation">
          <NavLink to="/spaces">Spaces</NavLink>
          <NavLink to="/memberships">Memberships</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>

        <button className="book-a-tour-button">Book a Tour</button>
      </div>
    </header>
  )
}
