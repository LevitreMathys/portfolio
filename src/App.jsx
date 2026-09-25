
import PictureOfMe from './assets/images/me.png';
import Circle from './assets/images/Circle.png';
import Header from './components/header';
import Footer from './components/footer';


function App() {

  return (
    <>
      <Header />
      <div id="right-line-section">
        <hr id='line1'/>
        <p>Portfolio</p>
        <hr id='line2'/>
        <p>2026</p>
      </div>
      <section>
        <div id="welcome-section">
          <span id="welcome-message">Bonjour !</span>
          <p>Mon nom est Levitre Mathys, je suis développeur et bienvenue sur mon <span>portfolio</span> !</p>
        </div>
        <div id="img-section">
          <img src={Circle} id="circle" alt="Circle" />
          <img src={PictureOfMe} id="me" alt="Me" />
        </div>
      </section>
      <Footer />
      
    </>
  )
}

export default App
