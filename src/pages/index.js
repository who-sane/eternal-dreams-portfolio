import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/Index'
import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'

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
   </>
  )
}

export default Home