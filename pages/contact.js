// Import the Link API to support client-side navigation
import Link from 'next/link'

// Import icons from react-icons
import { FaLinkedin } from 'react-icons/fa';
import { FaDribbbleSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

// Import react-bootstrap components
import Layout from '../components/MyLayout'

// Contact page
export default () => (
	<Layout>
        <div className="contactHeading">
            <h1>Contact Me</h1>
            {/* jsx styling */}
            <style jsx>
                {`
                    .contactHeading {
                        padding-top: 15px;
                        text-align: center;
                        position: relative;
                        background-color: rgb(46, 44, 44);
                        padding-bottom: 15px;
                    }

                    h1 {
                        color:rgb(31, 202, 145);
                    }
                `}
            </style>
        </div>
	    
        <div className="phoneNumber">
            <h4>Phone Number:</h4>
            <FaPhoneAlt/>
            <Link href="tel:+27655596371" target="_blank">
                <a>0655596371</a>
            </Link>
            {/* jsx styling */}
            <style jsx>
                {`
                    .phoneNumber { 
                        text-align: center;
                        position: relative;
                        padding-top: 20px;
                    }

                    a {
                        padding-left:10px;
                        text-decoration: none;
                        color: black;
                    }
                `}
            </style>
        </div>
        
        <div className="email">
            <h4>Email Address:</h4>
            <FaRegEnvelope/>
            <Link href="mailto:kaylamanson005@gmail.com" target="_blank">
                <a>kaylamanson005@gmail.com</a>
            </Link>
            {/* jsx styling */}
            <style jsx>
                {`  
                    .email {
                        padding-top: 20px;
                        padding-bottom: 20px;
                        text-align:center;
                        position:relative;
                    }

                    a {
                        padding-left:10px;
                        text-decoration: none;
                        color: black;
                    }
                `}
            </style>
        </div>
        
        <div className="social">
            <h2>Find me on the following platforms:</h2>
            <FaLinkedin/>
            <Link href="https://www.linkedin.com/in/kayla-manson-05/">
                <a target="_blank">LinkedIn</a>
            </Link>
            <FaDribbbleSquare/>
            <Link href="https://dribbble.com/kayla-manson">
                <a target="_blank">Dribbble</a>
            </Link>
            <FaGithubSquare/>
            <Link href="https://github.com/IamManson">
                <a target="_blank">GitHub</a>
            </Link>
            <FaInstagramSquare/>
            <Link href="https://www.instagram.com/i_am_manson/?hl=en">
                <a target="_blank">Instagram</a>
            </Link>
            {/* jsx styling */}
            <style jsx>
                {`  
                    .social {
                        padding-top: 20px;
                        text-align:center;
                        position:relative;
                        border: 1px solid rgb(31, 202, 145);
                        padding-bottom: 20px;
                        border-radius: 5px;
                    }

                    a {
                        padding-left:10px;
                        text-decoration: none;
                        color: black;
                        padding-right:20px;
                    }

                    h2 {
                        color:rgb(31, 202, 145);
                    }
                `}
            </style>


        </div>
        
  </Layout>
)