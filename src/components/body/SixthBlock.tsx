import './SixthBlock.css'


export function SixthBlock() {

  return (
    <div className="sixth-block-container">
      <div className="sixth-block-bg">
        <p className="flexible-plans-p">FLEXIBLE PLANS</p>
        <p className="plans-for-p">Plans for every kind of work</p>

        <div className="all-plan-container">
          <div className="plan-container">
            <p className="plan-name-p">Day Pass</p>
            <p className="plan-description-p">Perfect for focused solo work or quick projects.</p>
            <p className="price-p">$29 <span className="unit-price-s">/ day</span></p>

            <button className="buy-buttons">Book Now</button>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Access during business hours</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">High-speed Wifi-fi</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Community lounge</p>
            </div>
          </div>

          <div className="monthly-plan-container">
            <div className="most-popular-container">
              MOST POPULAR
            </div>

            <p className="plan-name-p">Monthly Membership</p>
            <p className="plan-description-p">Your desk, your community. All month long.</p>

            <p className="price-p">$199 <span className="unit-price-s">/ month</span></p>
            <button className="buy-buttons">Get Started</button>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">24/7 access</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Meeting room credits</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Member events</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Printing & storage</p>
            </div>
          </div>

          <div className="plan-container">
            <p className="plan-name-p">Team Suite</p>
            <p className="plan-description-p">Private spaces for teams who grow together.</p>
            <p className="price-p">$499 <span className="unit-price-s">/ month</span></p>

            <button className="buy-buttons">Contact Sales</button>


            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Private office for up to 6</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Meeting room credits</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Dedicated support</p>
            </div>

            <div>
              <img className="check-img" src="icon/check.png" />
              <p className="fifth-block-benefit-p">Customizable spaces</p>
            </div>


          </div>


        </div>
      </div>

    </div>
  )
}