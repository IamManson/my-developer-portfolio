//Import the Link API to support client-side navigation
//import Link from 'next/link'

// Import modules and react-bootstrap components
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

// Import JSXStyle
import _JSXStyle from 'styled-jsx/style'

// Home page
export default () => (
	<Layout>
        <div className="homeTitleText">
        <Image src="/static/images/Logo.png/" thumbnail />
	    <h1>KAYLA.</h1>
        <h3>Digital Marketer + Web Developer</h3>

        {/* jsx styling */}
        <style jsx>
            {`
                .homeTitleText {
                    position: relative;
                    text-align: center;
                    color: white;
                    background-color: rgb(46, 44, 44);
                    padding-top: 140px;
                    padding-bottom: 140px;
                    height: 100%;
                }

                h1 {
                    padding-top: 10px;
                }

                h3 {
                    color:rgb(31, 202, 145);
                }
            `}
        </style>
        </div>
	    
  </Layout>
)