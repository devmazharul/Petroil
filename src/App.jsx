import About from "./component/About/About"
import Banner from "./component/Banner/Banner"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Copyright from "./component/Footer/Copyright"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Logo from "./component/Logo/Logo"
import Maps from "./component/Maps/Maps"
import Navbar from "./component/Navbar/Navbar"
import Services from "./component/Services/Services"
import Slider from "./component/Slider/Slider"
import Welcome from "./component/Welcome/Welcome"


function App() {


  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Welcome />
      <Slider />
      <Services />
      <About />
      <Logo />
      <Blog />
      <Maps />
      <Contact />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
