import { Link } from 'react-router'

export function Locations() {
  return (
    <div className="route-page">
      <title>Locations | WorkLoft</title>
      <section className="page-hero">
        <div>
          <h1>WorkLoft locations</h1>
          <p>Get to know Downtown Hub and plan your first day at WorkLoft.</p>
          <Link className="site-button" to="/locations#plan-a-visit">Plan your visit</Link>
        </div>
        <img
          className="page-hero-photo"
          src={`${import.meta.env.BASE_URL}picture/space1.jpg`}
          alt="Shared workspace at Downtown Hub"
        />
      </section>

      <section className="page-section">
        <div className="page-card page-location-card">
          <div>
            <h2>Downtown Hub</h2>
            <p>Settle in for a workday or meet with your team in the heart of the city.</p>
          </div>
          <ul className="page-amenities">
            <li>Shared desks</li>
            <li>Meeting rooms</li>
            <li>Community lounge</li>
          </ul>
        </div>
      </section>

      <section className="page-section page-section-tinted" id="plan-a-visit">
        <h2>Plan a visit</h2>
        <p>Take a look at the workspace options before you visit. Day passes include access during business hours, and the monthly membership includes 24/7 access.</p>
        <Link className="page-text-link" to="/spaces#workspace-types">See workspace options</Link>
      </section>
    </div>
  )
}
