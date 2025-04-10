import React from 'react';
import './about.css'; 
import about_img from './.public/about.css'
//  import play_icon from './.public/play-icon-png'
import play_icon from './.public/icon3.jpg'

const About = () => {
  return (
 <div className='about'>
<div className="about-left">
<img src="about.jpg" alt="" className='about-img'/>
<img src="icon3.jpg" alt="" className='play-icon'/>

</div>
<div className='about-right'>
   <h3> About Biz4Tch Business Solution</h3>
   <p>'''''''''''''''''''''''''''</p>
</div>
 </div>
 
  )
}

export default About;