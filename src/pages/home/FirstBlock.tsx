import './FirstBlock.css'


export function FirstBlock() {

  return (
    <div className="first-block-container">
      <div className="first-block-bg">
        <div className="first-block-left-container">
          <p className="work-better-p">WORK BETTER, TOGETHER</p>
          <h1 className="find-your-p">Find Your Next Workspace</h1>
          <p className="first-block-description">Modern coworking spaces designed for productivity, creativity, and connection. Book by the day or join as a member.</p>

          <div className="first-block-left-fourth-row-container">
            <input type="text" className="search-by-input" aria-label="Search by location or city" placeholder="Search by location or city" />
            <button className="find-a-space-button">Find a Space</button>
          </div>


          <div className="first-block-left-last-row-container">
            <div>
              <img className="amenity-img" src="icon/wifi.png" />
              <p className="amenity-p">Fast Wi-fi</p>
            </div>

            <div>
              <img className="amenity-img" src="icon/meeting.png" />
              <p className="amenity-p">Meeting Rooms</p>
            </div>

            <div>
              <img className="amenity-img" src="icon/time.png" />
              <p className="amenity-p">24/7 Access</p>
            </div>

            <div>
              <img className="amenity-img" src="icon/heart.png" />
              <p className="amenity-p">Community</p>
            </div>
          </div>
        </div>

        <div className="first-block-right-container">
          <img className="first-block-right-space-img" src="picture/space1.jpg" alt="Coworking space with shared tables and lounge seating" />

          <div className="first-block-right-reviews-container">
            <div>
              <img className="star-img" src="icon/star.png" />
              <p className="rating-p">4.8/5</p>
            </div>

            <p className="from-p">from 320+ reviews</p>

            <div>
              <img className="first-block-dp-img" src="icon/dp1.jpg" />
              <img className="first-block-dp-img" src="icon/dp2.jpg" />
              <img className="first-block-dp-img" src="icon/dp3.jpg" />
              <img className="first-block-dp-img" src="icon/dp4.jpg" />
              <img className="first-block-dp-img" src="icon/dp5.jpg" />
            </div>
          </div>

          <div className="first-block-right-availability-container">
            <div className="first-row">
              <p className="todays-availability-p">Today's Availability</p>

              <div>
                <img className="green-img" src="icon/green.png" />
                <p className="live-p">Live</p>
              </div>
            </div>

            <div className="second-row">
              <div>
                <p className="downtown-hub-p">Downtown Hub</p>
                <p className="desks-available-p">12 desks available</p>
              </div>

              <img className="calendar-img" src="icon/calendar.png" />
            </div>

            <button className="view-spaces-button">View Spaces</button>

          </div>

        </div>
      </div>
    </div>
  )
}
