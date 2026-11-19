import './FourthBlock.css'


export function FourthBlock() {

  return (
    <div className="fourth-block-container">
      <div className="fourth-block-bg">
        <div className="fourth-block-stats-bg">
          <div className="stat-container">
            <img className="stats-img" src="icon/member.png" />

            <div>
              <p className="stat-value-p">10K+</p>
              <p className="stat-name-p">Members</p>
            </div>
          </div>

          <div className="stat-container">
            <img className="stats-img" src="icon/building.png" />

            <div>
              <p className="stat-value-p">25+</p>
              <p className="stat-name-p">Locations</p>
            </div>
          </div>

          <div className="stat-container">
            <img className="stats-img" src="icon/booking.png" />

            <div>
              <p className="stat-value-p">50K+</p>
              <p className="stat-name-p">Bookings</p>
            </div>
          </div>

          <div className="stat-container">
            <img className="stats-img" src="icon/rating.png" />

            <div>
              <p className="stat-value-p">4.8/5</p>
              <p className="stat-name-p">Average Rating</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}