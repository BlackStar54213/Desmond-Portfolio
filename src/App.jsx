import './App.css'
import Nav from './components/Nav' // Verified inclusion
import Work from '../src/components/workdets'
import Pic from './assets/me.jpg'
import Aniverse from './assets/aniverse.png';
import Adric from './assets/adric.png';
import Carrb from './assets/carrb.png';
import CarrbAdmin from './assets/carrbadmin.png';
import Della from './assets/Dellapng.png';
import CV from './assets/DesmondIZu.pdf'
function Progress(progress) {
  return (
    <div className="bar">
      <div className="progress" style={{ width: `${progress.percent}%` }}>{progress.percent}%</div>
    </div>
  )
}

function App() {
  return (
    <>
      <Nav />
      <header>
        <div className="left">
          <img src={Pic} alt="Desmond Izu" className="pp" />
          <h1>Hello! <br /> I'm Desmond Izu</h1>
        </div>
        <div className="right">
          <h2>A Web Developer Based in Delta State, Nigeria</h2>
          <p>A Developer with a passion for creating solutions in the form of attractive, responsive, and functional websites and mobile applications.</p>
          <div className="btn">
            <a href="https://wa.me/2348155053195" target="_blank" rel="noreferrer">
              <button className='primary'>Talk with me</button>
            </a>
            <a href="#port">
              <button className='secondary'>See my work</button>
            </a>
          </div>
        </div>
      </header>

      <div className="food">
        <main>
          <Work />

          <section className="skill" id="stack">
            <h2>My Tech Stack</h2>
            <div className="measure">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>BOOTSTRAP</li>
                <li>JQUERY</li>
                <li>REACT.JS</li>
                <li>NEXT.JS</li>
                <li>REACT NATIVE</li>
                <li>NODE/EXPRESS.JS</li>
                <li>C# DOTNET (.NET)</li>
                <li>FIREBASE</li>
                <li>SQL</li>
                <li>MONGODB</li>
                <li>POSTGRESQL</li>
                <li>GIT/GITHUB</li>
              </ul>
            </div>
            <a href={CV} download className="primary-btn">Download my CV</a>
          </section>

          <section className="Exp" id='port'>
            <h2>Previous Projects</h2>
            <p className="section-desc">Below are some of my previous projects, freelance and contracts. <b>Please click the cards to be redirected to the website or download the mobile apps apk.</b></p>

            <div className='cardsec'>
              <div className='card'>
                <div className='cardimg'>
                  <img src={Carrb} alt="Carrb Driver App" />
                </div>
                <div className='cardtext'>
                  <h4>Carrb Driver App</h4>
                  <h5>Mobile App</h5>
                  <h6>React Native, Firebase, Git, Redux</h6>
                </div>
              </div>

              <div className='card'>
                <div className='cardimg'>
                  <img src={Carrb} alt="Carrb Rider App" />
                </div>
                <div className='cardtext'>
                  <h4>Carrb Rider App</h4>
                  <h5>Mobile App</h5>
                  <h6>React Native, Firebase, Git, Redux</h6>
                </div>
              </div>

              <div className='card'>
                <div className='cardimg'>
                  <img src={Della} alt="Della Movie App" />
                </div>
                <div className='cardtext'>
                  <h4>Della Movie App</h4>
                  <h5>Mobile App</h5>
                  <h6>React Native, Git, Redux</h6>
                </div>
              </div>

              <a href="https://adric.onrender.com/" target="_blank" rel="noreferrer">
                <div className='card'>
                  <div className='cardimg'>
                    <img src={Adric} alt="Adric Store" />
                  </div>
                  <div className='cardtext'>
                    <h4>Adric Phone Store</h4>
                    <h5>Web App</h5>
                    <h6>React.js, Express.js, Git, MongoDB</h6>
                  </div>
                </div>
              </a>

              <a href="https://aniverse-cwum.onrender.com/" target="_blank" rel="noreferrer">
                <div className='card'>
                  <div className='cardimg'>
                    <img src={Aniverse} alt="Aniverse Web App" />
                  </div>
                  <div className='cardtext'>
                    <h4>Aniverse Web App</h4>
                    <h5>Web App</h5>
                    <h6>React.js, Firebase, Express.js, Git</h6>
                  </div>
                </div>
              </a>

              <div className='card' onClick={() => alert("Sorry, I can't grant access to this project as permission was not given by the owners.")}>
                <div className='cardimg'>
                  <img src={CarrbAdmin} alt="Carrb Admin" />
                </div>
                <div className='cardtext'>
                  <h4>Carrb Admin Dashboard</h4>
                  <h5>Web App</h5>
                  <h6>Next.js, Firebase, Git</h6>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div className="footer-content">
          <h3>Okeme Desmond Izu</h3>
          <p>I’m Izu Okeme Desmond, a developer with intermediate experience level. Passionate about crafting your vision into reality.</p>
        </div>
      </footer>
    </>
  )
}

export default App