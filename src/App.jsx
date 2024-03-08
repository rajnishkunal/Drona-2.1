import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import SubHero from './component/SubHero'
import About from './component/About'
import AppScreen from './component/AppScreen';
import Contact from './component/Contact'
import Footer from './component/Footer'


function App() {

  return (
    <div>
      <Navbar />
      <Hero/>
      <SubHero/>
      <About/>
      <AppScreen/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
