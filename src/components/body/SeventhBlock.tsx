import './SeventhBlock.css'


export function SeventhBlock() {

  return (
    <div className="seventh-block-container">
      <div className="seventh-block-bg">
        <p className="loved-by-p">LOVED BY OUR MEMBERS</p>

        <div className="all-members-container">
          <div className="member-container">
            <img className="member-img" src="icon/dp6.jpg" />

            <div>
              <img className="quote-img" src="icon/quote.png" />
              <p className="workloft-has-p">WorkLoft has completely changed how our team works. The space is beautiful, the community is inspiring, and everything just works.</p>

              <p className="member-name-p">Sarah J.</p>
              <p className="fifth-block-benefit-p">Product Manager, Notion</p>
              <img className="fivestar-img" src="icon/fivestar.png" />

            </div>
          </div>

          <div className="member-container">
            <img className="member-img" src="icon/dp7.jpg" />

            <div>
              <img className="quote-img" src="icon/quote.png" />
              <p className="workloft-has-p">From the lightning fast wi-fi to the friendly staff, every detail is thoughtfully designed. My go-to spot for deep work and great meetings.</p>

              <p className="member-name-p">Daniel K.</p>
              <p className="fifth-block-benefit-p">Founder, Creativo</p>
              <img className="fivestar-img" src="icon/fivestar.png" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}