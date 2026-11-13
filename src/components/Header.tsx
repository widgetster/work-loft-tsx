import './Header.css'


export function Header() {

  return (
    <header className="header-container">
      <div className="header-bg">
        <div className="header-left-container">
          <img className="header-logo-img" src="icon/logo.png" />
          <p className="header-workloft-p">WorkLoft</p>
        </div>

        <div className="header-middle-container">
          <div><p>Spaces</p></div>
          <div><p>Memberships</p></div>
          <div><p>Locations</p></div>
          <div><p>Resources</p></div>
        </div>

        <button className="book-a-tour-button">Book a Tour</button>
      </div>
    </header>
  )
} 