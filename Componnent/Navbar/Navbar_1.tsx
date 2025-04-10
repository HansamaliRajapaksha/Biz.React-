import './Navbar'
function Navbar() {
    return (
        <nav className="navbar">
          <img src="log.jpg" alt="Logo" />
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Home
              </a> </li>
           
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a></li>
            
            <li className="nav-item">
              <a href="#" className="nav-link">
                Services
              </a></li>
            
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a></li>
            
          </ul>
        </nav>
      )
}

export default Navbar;