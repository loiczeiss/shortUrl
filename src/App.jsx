import "./App.css";
import NavMobile from "./Component/NavMobile";
import IlluWorking from "./assets/illustration-working.svg";
import BrandrecoImg from "./assets/icon-brand-recognition.svg";
import DetailedRecordsImg from "./assets/icon-detailed-records.svg";
import FullyCustomImg from "./assets/icon-fully-customizable.svg";
import ShorthlyLogo from "./assets/logo.svg"
import Facebook from "./assets/icon-facebook.svg"
import Twitter from "./assets/icon-twitter.svg"
import Pinterest from "./assets/icon-pinterest.svg"
import Instagram from "./assets/icon-instagram.svg"
function App() {
  return (
    <>
      <div>
        <header>
          <NavMobile />
        </header>
        <article className="presentationArticle">
          <section className="presTexts">
            <h1>More than just shorter links</h1>
            <p id="presText">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button id="presButton">Get Started</button>
          </section>
          <section className="presImg">
            <img src={IlluWorking} alt="illuWorking" id="illuWorking" />
          </section>
        </article>
        <div className="executionDiv">
          <section id="inputSection">
            <input
              type="text"
              name="link"
              id="linkInput"
              placeholder="Shorten a link here..."
            />
            <p id="linkParagraph">Please add a link</p>
            <button id="linkButton">Shorten it!</button>
          </section>
          <section id="resultSection">
            <div id="resultFullDiv">
              <p id="resultFullUrl">frontendmentor.celjkfe</p>
            </div>
            <p id="resultShortUrl">httpseferf</p>
            <button id="resultButton">Copy</button>
          </section>
        </div>
        <article id="explanationArticle">
          <section id="explanationTitleSection">
            <h2>Advanced Statistics</h2>
            <p id="explanationTitleText">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </section>
          <section id="explanationContentSection">
            <div className="explanationContentDivs">
              <div className="explanationContentImgDiv">
                {" "}
                <img
                  src={BrandrecoImg}
                  alt="brand reco"
                  className="explanationContentImg"
                />
              </div>
              <h4>Brand Recognition</h4>
              <p className="explanationContentText">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. branded links helps instil confidence in
                your content.
              </p>
            </div>
            <div className="verticalLine"></div>
            <div className="explanationContentDivs">
              <div className="explanationContentImgDiv">
                {" "}
                <img src={DetailedRecordsImg} alt="Detailed records"         className="explanationContentImg"/>
              </div>
              <h4>Detailed records</h4>{" "}
              <p className="explanationContentText">
                Gain insights who is clicking your links. Knowing when and where
                people enagage with your content helps inform better decisions.
              </p>
            </div>
            <div className="verticalLine"></div>
            <div id="explanationContentDivFinal">
              <div className="explanationContentImgDiv">
                {" "}
                <img src={FullyCustomImg} alt="Fully custom"         className="explanationContentImg" />
              </div>
              <h4>Fully Customizable</h4>
              <p className="explanationContentText">
                Improve brande awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </section>
        </article>
        <article id="sloganArticle">
        
            <h2 id="sloganH2">Boost your links today</h2>
            <button id="sloganButton">Get Started</button>
         
        </article>
        <footer id="footerDiv">
          <section id="footerLogoDiv">
       <img src={ShorthlyLogo} alt="ShortlyLogo" id="ShortlyLogo" style={{ filter: 'brightness(0) invert(1)' }}/>
          </section>
          <section id="footerLinksSection">
            <div className="footerLinksDiv">
              <p className="footerText">Features</p>
              <ul id="footerLinksUl">
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <p className="footerText">Resources</p>
              <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <p className="footerText">Company</p>
              <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </section>
          <section id="footerSectionSocials">
            <img src={Facebook} alt="facebook" className="footerSectionSocialsImg"/>
            <img src={Twitter} alt="Twitter" />
            <img src={Pinterest} alt="Pinterest" />
            <img src={Instagram} alt="Instagram" />
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
