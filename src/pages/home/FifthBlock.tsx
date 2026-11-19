import './FifthBlock.css'


export function FifthBlock() {

  return (
    <div className="fifth-block-container">
      <div className="fifth-block-bg">
        <div className="fifth-block-left-container">
          <img className="space2-img" src="picture/space2.jpg" />

          <div>
            <img className="space3-img" src="picture/space3.jpg" />
            <img className="space3-img" src="picture/space4.jpg" />
          </div>
        </div>

        <div className="fifth-block-right-container">
          <p className="designed-for-p">DESIGNED FOR HOW YOU WORK</p>
          <p className="more-than-p">More than a desk.</p>
          <p className="more-than-p">A better way to work.</p>

          <p className="workloft-spaces-p">WorkLoft spaces are thoughtfully designed to help you focus, collaborate, and grow. Wheteher you're a freelancer, startup, or established team.</p>

          <div>
            <img className="check-img" src="icon/check.png" />
            <p className="fifth-block-benefit-p">Flexible options: day passes or monthly plans</p>
          </div>

          <div>
            <img className="check-img" src="icon/check.png" />
            <p className="fifth-block-benefit-p">Book meeting rooms in seconds</p>
          </div>

          <div>
            <img className="check-img" src="icon/check.png" />
            <p className="fifth-block-benefit-p">Join a community of driven professionals</p>
          </div>

          <div>
            <img className="check-img" src="icon/check.png" />
            <p className="fifth-block-benefit-p">Events and networking opportunities</p>
          </div>

          <button className="explore-locations-buttons">Explore Locations</button>

        </div>
      </div>
    </div>
  )
}