import './App.css'
import Hero from './Components/Hero'
import offers from './Constants/Offers'
import constants from './Constants/constants'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'
import Press from './Components/Press'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Hero/>
    <Component1/>
    <Component2 title="Accommodations" acc_obj={constants.acc} />
    <Component3/>
    <Component2 title="Promos and Offers" acc_obj={offers} />
    <Press/>
    <Footer/>
    </>
  )
}

export default App
