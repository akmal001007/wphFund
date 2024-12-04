import React from 'react'
import '../styles/CampaignBanner.css'

const CampaignBanner = () => {
  return (
    <div className="banner">
      <div className="main-text">
        <h1>
          Support women.
          <br />
          Respond to crisis.
          <br />
          Build peace.
        </h1>
        <button className="campaign-button">
          JOIN THE #INVESTINWOMEN GLOBAL CAMPAIGN
        </button>
      </div>
      <div className="info-sections">
        <div className="info-box">
          <h2>OUR DONORS</h2>
          <p>
            WPHF is supported by governments, individuals, and private entities.
          </p>
        </div>
        <div className="info-box">
          <h2>OUR PARTNERS</h2>
          <p>
            Womens organizations are at the heart of WPHF's mandate, both as
            decision makers and partners on the frontlines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CampaignBanner