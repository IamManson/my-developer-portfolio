// Import the Link API to support client-side navigation
import Link from 'next/link'

// Import Navbar component from React-Bootstrap
import Navbar from 'react-bootstrap/Navbar'

// Import JSXStyle
import _JSXStyle from 'styled-jsx/style'

// Link styling
const linkStyle = {
  marginRight: 20
}

// Navbar component
const Header = () => (
    <div>
        <Navbar bg="light" className="navbar">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact Me</a>
        </Link>
        </Navbar>
        
        {/* jsx styling */}
        <style jsx>
            {`
                a {
                    color: black;
                }
            `}
        </style>
    </div>
)

export default Header