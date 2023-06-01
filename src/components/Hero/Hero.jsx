import "./hero.css";
import miner from "../../assets/s9miner.jpeg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="card">
        <div className="card-left">
          <div className="top-ctas">
            <div className="top-cta1">Cloud mining</div>
            <div className="top-cta2">Free 1 TH/$ on first sign up!</div>
          </div>
          <div className="card-texts">
            <p className="card-heading-text">
              Start your Bitcoin mining Journey today.
            </p>
            <p className="card-normal-text">Get your final payout today </p>
          </div>
          <div className="card-bottom-cta">
            <p>Try it now</p>
          </div>
        </div>
        <div className="card-right">
          <img src={miner} alt="Antminner" /> 
          <div className="image-text">
            <p className="card-right-name"> Antminer $9k</p>
            <p> Run for 360 days</p>
                  </div>
                  <div className="btc-per-time">
                      <p>0.4354556 BTC Daily</p>
                      <p>0.4354556 BTC Monthly</p>
                  </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
