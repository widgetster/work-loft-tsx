import './ThirdBlock.css'


export function ThirdBlock() {

  return (
    <div className="third-block-container">
      <div className="third-block-bg">
        <div className="benefits-container">
          <img className="benefit-img" src="icon/location.png" />

          <div>
            <p className="benefit-name-p">Prime Locations</p>
            <p className="benefit-description-p">Accessing inspiring workspaces in the heart of the city.</p>
          </div>
        </div>

        <div className="benefits-container">
          <img className="benefit-img" src="icon/cup.png" />

          <div>
            <p className="benefit-name-p">All-Inclusive</p>
            <p className="benefit-description-p">Everything you need to work comfortably, included.</p>
          </div>
        </div>

        <div className="benefits-container">
          <img className="benefit-img" src="icon/productive.png" />

          <div>
            <p className="benefit-name-p">Built for Productivity</p>
            <p className="benefit-description-p">Ergonomic furniture, quiet zones, and high-speed internet.</p>
          </div>
        </div>



      </div>
    </div>

  )
}