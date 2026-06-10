
import './App.css'
import Work from '../src/components/workdets'
import Pic from './assets/me.jpg'
import Aniverse from './assets/aniverse.png';
import Adric from './assets/adric.png';
import Carrb from './assets/carrb.png';
import CarrbAdmin from './assets/carrbadmin.png';
import Della from './assets/Dellapng.png';
function Progress(progress) {
  return (
    <>
      <div className="bar">
        <div className="progress">{progress.percent}%</div>
      </div>
    </>
  )
}
function App() {
  return (
    <>
      <header>
        <div className="left">
          <img src={Pic} alt="" className="pp" />
          <h1>Hello! <br /> I'm Desmond Izu</h1>


        </div>
        <div className="right">
          <h2>A Web Developer Based in Delta State, Nigeria</h2>
          <p>A Developer with a passion for creating solutions in form of attractive, responsive and functional websites</p><div className="btn">
            <button className='primary'>Talk with me</button><button className='secondary'>See my work</button>
          </div>
        </div>

      </header>
      <main>
        {/* <section className="">
          <h2>About Me</h2>
          <p>My name is Okeme Desmond Izu, a Web Developer born and raised in Abraka Delta State Nigeria. </p>
        </section> */}
        <Work />
        <section className="skill">
          <h2>My Tech Stack</h2>
          <div className="measure">
            <ul>
              <li>HTML</li>

              <li>CSS </li>
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
              <li>GIT/GITHUB VERSION CONTROL</li>
            </ul>
          </div>
          <a href="" className="primary">Download my CV</a>
        </section>
        <section className="Exp" id='port'>
          <h2>Previous Projects</h2>
          <p>Below are some of my previous projects, freelance and contracts. <b>Please click the cards to be redirect to the website or download the mobile apps apk.</b></p>


          <section>

            <div className='cardsec'>
              <div className='card'>
                <div className='cardimg'>
                  <img src={Carrb} alt="" />
                </div>
                <div className='cardtext'>
                  <h4>Carrb Driver App</h4>
                  <h5>Mobile App</h5>
                  <h6>React Native, Firebase, Git, Redux, </h6>
                </div>
              </div>
              <div className='card'>
                <div className='cardimg'>
                  <img src={Carrb} alt="" />
                </div>
                <div className='cardtext'>
                  <h4>Carrb Rider App</h4>
                  <h5>Mobile App</h5>
                  <h6>React Native, Firebase, Git, Redux, </h6>
                </div>
              </div>
              <div className='card'>
                <div className='cardimg'>
                  <img src={Della} alt="" />
                </div>
                <div className='cardtext'>
                  <h4>Della Movie App</h4>
                  <h5>Mobile App</h5>
                  <h6>React Native, Git, Redux </h6>
                </div>
              </div>

              <a href="https://adric.onrender.com/">
                <div className='card'>
                  <div className='cardimg'>
                    <img src={Adric} alt="" />
                  </div>
                  <div className='cardtext'>
                    <h4>Adric Phone Store</h4>
                    <h5>Web App</h5>
                    <h6>React.js, Express.js, Git, MongoDB </h6>
                  </div>
                </div>
              </a>
              <a href="https://aniverse-cwum.onrender.com/">
                <div className='card'>
                  <div className='cardimg'>
                    <img src={Aniverse} alt="" />
                  </div>
                  <div className='cardtext'>
                    <h4>Aniverse Web App</h4>
                    <h5>Web App</h5>
                    <h6>React.js, Firebase, Express.js, Git </h6>
                  </div>
                </div>
              </a>
              <div className='card' onClick={
                () => {
                  alert("Sorry I can't grant access to this project as permission was not given by the owners")
                }
              }>
                <div className='cardimg'>
                  <img src={CarrbAdmin} alt="" />
                </div>
                <div className='cardtext'>
                  <h4>Carrb Admin Dashboard</h4>
                  <h5>Web App</h5>
                  <h6>Next.js, Firebase, Git.</h6>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer>
        <center>
          <div className="top">
            <h3>Okeme Desmond Izu</h3>
            <p>I’m Izu Okeme Desmond, a developer with a suitable Experience level. I’m Passionate About
              Crafting Your Vision Into Our Reality.</p>

          </div>
        </center>
      </footer>

    </>
  )
}

export default App
