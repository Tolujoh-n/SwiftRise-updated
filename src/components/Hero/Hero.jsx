import "./hero.css";
import miner from "../../assets/s9miner.jpeg";
import minerMan from "../../assets/miner-image.jpeg";
import { AiOutlinePlus } from "react-icons/ai";
import video from "../../assets/verifarm.mp4";
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
              Currently, the Swiftrise pool supports Bitcoin (BTC), Etherium
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
              <p>What is Swiftrise?</p>
            </div>
            <p>
              Swiftrise is a simple and affordable cloud mining service. The main
              purpose of which is to introduce a wider audience to the world of
              bitcoin and other cryptocurrencies. Swiftrise has a huge number of
              ASIIC miners who mine bitcoin daily on the Swiftrise pool.
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

      <div className="earn">
        <div className="earn-left">
          <div className="earn-texts">
            <div className="earn-title">
              <p>Earn Money with Swiftrise?</p>
            </div>
            <p>
              To start mining bitcoins, just select a miner equipment from your
              personal Swiftrise account, each miner has a different cost and
              rental period. Each equipment generates a unique account of
              bitcoin daily. These coins are deposited to your personal account.
              You just have to collect your coins everyday without any cost
            </p>
          </div>
        </div>
        <div className="earn-image">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="staggers">
        <div className="stagger one">
          <p className="title">Extensive range of services</p>
          <p>
            The Swiftrise pool is an important part of the global Swiftrise
            ecosystem. Uses thesame accounting system as our cloud minning
            service to ensure security. The Swiftrise and Swiftrise pool aims to
            erase the line between mining and trading by providing users with a
            wide range of mining solutions.
          </p>
        </div>

        <div className="stagger two">
          <p className="title">Reliable mining solutions</p>
          <p>
            Swiftrise provides a comprehensive mining platform with extensive
            experience working with mining pools and competitive mining
            technologies. We Strive to provide high quality and innovative cloud
            mining service for users who need comprehensive mining services.
          </p>
        </div>

        <div className="stagger three">
          <p className="title">Guarantee of services</p>
          <p>
            Swiftrise strives to provide qualified projects with opportunities
            and improve industry standard practices to achieve consensus in the
            community. We strive to introduce more people around the world to
            blockchain technology and outstanding projects as well as contribute
            towards the sustainable and stable development of our ecosystem.
          </p>
        </div>
      </div>
      <div className="FAQ">
        <p className="title">FAQ</p>
        <div className="faq-lists">
          {[
            "What is Cloud Minning?",
            "How does it work?",
            "when can I withdraw funds from my account?",
            "Can I rent several different miners?",
            "What payment method do you accept and what coins can be mined?",
            "Do you have an affiliate program and how does it work?",
          ].map((list, id) => (
            <div key={id} className="faq-list">
              <p>{list}</p>
              <AiOutlinePlus />
            </div>
          ))}
        </div>
      </div>
      <div className="end">
        <p>Start your bitcoin mining journey today!</p>
        <button>
          <p>Register Now</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
