import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
//import '../public/nprogress.css'

// Import Navbar component from React-Bootstrap
import Navbar from 'react-bootstrap/Navbar'

// Import JSXStyle
import _JSXStyle from 'styled-jsx/style'

// Link styling
const linkStyle = {
  marginRight: 20
}


export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
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
        <Component {...pageProps} />
        {/* jsx styling */}
        <style jsx>
            {`
                a {
                    color: black;
                }
            `}
        </style>
    </div>
      
    </>
  )
}