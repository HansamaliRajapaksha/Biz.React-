// import  React from 'react'
// import './Footer.css'
 
// const Footer = () => {
//     return (
//         <div className='footer'>
//             <p> BIZ4TECH Business Solutions</p>
//             <ul>
//                 <li> Terms of Services </li>
//                 <li> Privacy Policy </li>
//             </ul>
//         </div>
//     )
// }

// export default Footer

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} BIZ4TECH Business Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;
