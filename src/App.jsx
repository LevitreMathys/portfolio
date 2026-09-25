
import './App.css'
import PictureOfMe from './assets/images/me.png';
import Circle from './assets/images/circle.png';
import Header from './components/header';


function App() {
  
  const footerList = [
    "Home",
    "Projects",
    "Contact"
  ]

  return (
    <>
      <Header />
      <div>
        <div className="line"></div>
        <p>Portfolio</p>
        <div className="line"></div>
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
      <footer>
        <ul>
          {footerList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </footer>
    </>
  )
}

export default App
