import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/Index'
import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const Home = () => {

const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
  console.log(isOpen)
}

  return (
   <>
   <Sidebar isOpen={isOpen}  toggle={toggle} />
   <Navbar toggle={toggle} />
   <HeroSection />
   <InfoSection {...homeObjOne} />
   <InfoSection {...homeObjTwo} />
   <Portfolio />
   <Footer />
   </>
  )
}

export default Home