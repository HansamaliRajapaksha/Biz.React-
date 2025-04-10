import React from 'react';
import './title.css'; 

const Title = ({subTitle, title}) => {
  return (
<div className="title">
    {/* <p> Our Services ...</p> */}
    {/* <h2> What we Offer </h2> */}
      <p>{subTitle}</p>
      <h2>{title}</h2>

    </div>
  )
}

export default Title;