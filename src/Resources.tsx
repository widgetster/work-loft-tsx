import { Link } from 'react-router'

export function Resources() {
  return (
    <div className="route-page">
      <title>Resources | WorkLoft</title>
      <section className="page-hero page-hero-centered">
        <div>
          <h1>WorkLoft resources</h1>
          <p>Find the right workspace, compare access options, and get ready for your first visit.</p>
        </div>
      </section>

      <section className="page-section" id="guides">
        <h2>Getting started</h2>
        <div className="page-card-grid">
          <article className="page-card page-card-content">
            <h3>Choose a workspace</h3>
            <p>Compare shared desks, meeting rooms, and private suites.</p>
            <Link className="page-text-link" to="/spaces#workspace-types">Explore spaces</Link>
          </article>
          <article className="page-card page-card-content">
            <h3>Find the right plan</h3>
            <p>See how day passes, monthly memberships, and team suites compare.</p>
            <Link className="page-text-link" to="/memberships">Compare memberships</Link>
          </article>
          <article className="page-card page-card-content">
            <h3>Get ready to visit</h3>
            <p>Get to know Downtown Hub and check what each pass includes.</p>
            <Link className="page-text-link" to="/locations#plan-a-visit">Plan your visit</Link>
          </article>
        </div>
      </section>

      <section className="page-section page-section-tinted" id="help-center">
        <h2>Frequently asked questions</h2>
        <div className="page-faq">
          <details>
            <summary>Can I use WorkLoft for one day?</summary>
            <p>Yes. A Day Pass gives you access during business hours, with high-speed Wi-Fi and use of the community lounge.</p>
          </details>
          <details>
            <summary>Which plan offers 24/7 access?</summary>
            <p>The Monthly Membership includes 24/7 access, meeting room credits, and member events.</p>
          </details>
          <details>
            <summary>How many people can use a Team Suite?</summary>
            <p>A Team Suite includes a private office for up to six people.</p>
          </details>
        </div>
      </section>
    </div>
  )
}
