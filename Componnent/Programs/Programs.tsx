import React from 'react'
import './Programs.css'
import program_1 from  './public/programs1.jpg'
import program_2 from  './public/programs2.jpg'
import program_3 from  './public/programs3.jpg'
import program_icon_1 from './public/programs-icon1.jpg'
import program_icon_2 from './public/programs-icon2.jpg'
import program_icon_3 from './public/programs-icon3.jpg'
const Programs = () => {  
return (
    <div className="programs">
      <div className="programs">
        <img src={"./public/programs1.jpg"} alt="" />
        {/* <img src="./public/programs1.jpg" alt=""/> */}
        <div className="caption">
          <img src= {"./public/programs/icon1.jpg"} alt="" />
          <p> Education </p>
        </div>
      </div>
      <div className="programs">
        <img src="./public/programs2.jpg" alt=""/>
        <div className="caption">
          <img src={"programs/icon2.jpg" }alt="" />
          <p> Business Solution</p>
        </div>
      </div>
      <div className="programs">
        <img src="./public/programs3.jpg" alt=""/>
        <div className="caption">
          <img src= {"programs/icon3.jpg"} alt="" />
          <p> Technology Solution </p>
        </div>
      </div>
     
    </div>
  )
}

export default Programs;