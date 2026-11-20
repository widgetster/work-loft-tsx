import { Link } from 'react-router'

const plans = [
  {
    name: 'Day Pass',
    description: 'For a focused workday or a quick project.',
    price: 29,
    interval: 'day',
    features: ['Business-hours access', 'High-speed Wi-Fi', 'Community lounge'],
  },
  {
    name: 'Monthly Membership',
    description: 'For people who cowork regularly.',
    price: 199,
    interval: 'month',
    features: ['24/7 access', 'Meeting room credits', 'Member events', 'Printing and storage'],
  },
  {
    name: 'Team Suite',
    description: 'For teams that need a dedicated office.',
    price: 499,
    interval: 'month',
    features: ['Private office for up to six', 'Meeting room credits', 'Dedicated support', 'Customizable space'],
  },
]

export function Memberships() {
  return (
    <div className="route-page">
      <title>Memberships | WorkLoft</title>
      <section className="page-hero page-hero-centered">
        <div>
          <h1>WorkLoft memberships</h1>
          <p>Start with a day pass, make coworking part of your routine, or give your team a private suite.</p>
          <Link className="site-button" to="/spaces">Explore workspaces</Link>
        </div>
      </section>

      <section className="page-section">
        <h2>Compare plans</h2>
        <div className="page-card-grid">
          {plans.map(({ name, description, price, interval, features }) => (
            <article className="page-card page-card-content" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p className="page-plan-price">
                <strong>${price}</strong> <span>/ {interval}</span>
              </p>
              <ul className="page-plan-features">
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section-tinted">
        <h2>Questions about access?</h2>
        <p>See what comes with a day pass and how monthly access works in the <Link className="page-text-link" to="/resources#help-center">Help Center</Link>.</p>
      </section>
    </div>
  )
}
