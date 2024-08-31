import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px 20px',
        fontFamily: 'Arial, sans-serif',
      };
    
      const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 15px',
        transition: 'background-color 0.3s',
      };
    
      const linkHoverStyle = {
        backgroundColor: '#575757',
      };
    
      const containerStyle = {
        display: 'flex',
        gap: '15px',
      };

  return (
    <>

    <nav style={navStyle}>
        <div style={containerStyle}>
          <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>First Progam</Link>
          <Link to="/Dpendncyuseeffect" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Second Program</Link>
          
        </div>
      </nav>

    </>
  )
}

export default Navbar