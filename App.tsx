import React from 'react'
import Navbar from './Componnent/Navbar/Navbar_1'
import Main from './Componnent/Main/main'
import Programs from './Componnent/Programs/Programs'
import About from './Componnent/About/about'
// import Services from './Componnet/Services/services'
import Contact from './Componnent/Contact/contact'
import Title from './Componnent/Title/title'
import Footer from './Componnent/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Main/>
       <div className="container"> 
        <Title subTitle = 'Our Program' title='What We Offer'/> 
      <Programs/>
      <About/>
      {/* <Services/> */}
      <Title subTitle={'Contact Us'} title={'Get in Touch'} />
      <Contact/>
      <Footer/>
       </div> 
    </div>
  )
}

export default App

