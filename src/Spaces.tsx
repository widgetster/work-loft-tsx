import { Link } from 'react-router'

const workspaceTypes = [
  {
    id: 'shared-desks',
    name: 'Shared Desks',
    description: 'Find a seat in an open workspace with fast Wi-Fi, comfortable desks, and a community lounge.',
    photo: 'space4.jpg',
    alt: 'Open coworking lounge with shared seating',
  },
  {
    id: 'meeting-rooms',
    name: 'Meeting Rooms',
    description: 'Bring your team together for a workshop, presentation, or a quick planning session.',
    photo: 'space3.jpg',
    alt: 'Meeting space with a long table and chairs',
  },
  {
    id: 'private-suites',
    name: 'Private Suites',
    description: 'Give your team a dedicated office with room to focus, collaborate, and settle in.',
    photo: 'space2.jpg',
    alt: 'Enclosed office with desks and seating',
  },
]

export function Spaces() {
  return (
    <div className="route-page">
      <title>Spaces | WorkLoft</title>
      <section className="page-hero">
        <div>
          <h1>Spaces for the way you work</h1>
          <p>Drop in for a focused afternoon, bring your team together, or find a workspace to call your own.</p>
          <Link className="site-button" to="/memberships">Compare plans</Link>
        </div>
        <img
          className="page-hero-photo"
          src={`${import.meta.env.BASE_URL}picture/space1.jpg`}
          alt="Coworking space with shared desks and lounge seating"
        />
      </section>

      <section className="page-section" id="workspace-types">
        <h2>Choose your workspace</h2>
        <div className="page-card-grid">
          {workspaceTypes.map(({ id, name, description, photo, alt }) => (
            <article className="page-card" id={id} key={id}>
              <img className="page-card-photo" src={`${import.meta.env.BASE_URL}picture/${photo}`} alt={alt} loading="lazy" />
              <div className="page-card-content">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section-tinted" id="amenities">
        <h2>Amenities</h2>
        <ul className="page-amenities">
          <li>High-speed Wi-Fi</li>
          <li>Ergonomic seating</li>
          <li>Quiet zones</li>
          <li>Community lounge</li>
        </ul>
      </section>
    </div>
  )
}
