import "./hero.css";
import miner from "../../assets/s9miner.jpeg";
import minerMan from "../../assets/miner-image.jpeg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="big-card">
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
      <div className="middle-cards">
        <div className="middle-card">
          <div className="background-image">
            <img src="" alt="" />
          </div>
          <div className="middle-card-texts">
            <p className="middle-card-text-title">Stable Income</p>
            <p className="middle-card-text-desc">
              Our powerful mining pool guarantees a stable income
            </p>
          </div>
        </div>

        <div className="middle-card">
          <div className="background-image">
            <img src="" alt="" />
          </div>
          <div className="middle-card-texts">
            <p className="middle-card-text-title">Reliable security system</p>
            <p className="middle-card-text-desc">
              A thoughtful and reliable security system that protects the assets
              and privacy of users
            </p>
          </div>
        </div>

        <div className="middle-card">
          <div className="background-image">
            <img src="" alt="" />
          </div>
          <div className="middle-card-texts">
            <p className="middle-card-text-title">Multiple tokens</p>
            <p className="middle-card-text-desc">
              Currently, the Vericoin pool supports Bitcoin (BTC), Etherium
              (ETH) and Bitcoin Cash (BACK)
            </p>
          </div>
        </div>
      </div>

      <div className="middle-objects">
        <div className="middle-object">
          <div className="background-image">
            <img src="" alt="" />
          </div>
          <div className="middle-object-texts">
            <p className="middle-object-text-title">23827</p>
            <p className="middle-object-text-desc">Users</p>
          </div>
        </div>

        <div className="middle-object">
          <div className="background-image">
            <img src="" alt="" />
          </div>
          <div className="middle-object-texts">
            <p className="middle-object-text-title">1310.8879</p>
            <p className="middle-object-text-desc">Users</p>
          </div>
        </div>

        <div className="middle-object">
          <div className="background-image">
            <img src="" alt="" />
          </div>
          <div className="middle-object-texts">
            <p className="middle-object-text-title">30207</p>
            <p className="middle-object-text-desc">Users</p>
          </div>
        </div>
      </div>

      <div className="what-is">
        <div className="what-is-left">
          <div className="what-is-texts">
            <div className="what-is-title">
              <p>What is Veryfarm?</p>
            </div>
            <p>
              Verifarm is a simple and affordable cloud mining service. The main
              purpose of which is to introduce a wider audience to the world of
              bitcoin and other cryptocurrencies. Verifarm has a huge number of
              ASIIC miners who mine bitcoin daily on the vericoin pool.
            </p>
          </div>
          <div className="what-is-button">
            <button>Try from here</button>
          </div>
        </div>
        <div className="right-image">
          <img src={minerMan} alt="miner man" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
