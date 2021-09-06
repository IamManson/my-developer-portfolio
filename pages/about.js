// Import modules and react-bootstrap components
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Import JSXStyle
import _JSXStyle from 'styled-jsx/style'

// About Section
export default () => (
  <Layout>
      <div className="aboutIntro">
      <Row>
        <Col xs={6} md={4}>
            <Image className="profilePic" src="/static/images/pp.png.jfif/" thumbnail />
        </Col>
       
        <Col xs={6} md={8}>
        <h2>Digital Marketer by day, Web Developer by night</h2>

        <p>My name is Kayla Manson and I am 27 years old.</p>

        <p>I have been in digital marketing as a Senior Account Manager and Graphic Designer for 4 years 
            and over the last year have found a deep love for web development. I have always had a love for technology, 
            art and people. As I started exploring programming and web development, I have realised that I have 
            found a way to combine all the things I love in a beautiful way. It has allowed me to be forward-thinking, 
            creative and create something that benefits the one thing I care most about...people.</p>

        <p>My biggest asset or skill is my empathetic nature. It has allowed me to put myself in other peoples shoes 
            and try and think like they do, which in turn allows me to create more meaningful and targeted content, 
            designs, campaigns and more.My current goals are to complete my Full-Stack Web Developer Bootcamp with 
            HyperionDev and then continue to build on those skills to shift into the web development world career-wise.</p>

        <p>In addition to marketing and programming, I have several hobbies that motivate me everday. I absolutely love art, 
            whether it be painting, sketching, digital drawings and doing random DIY projects. It's a fantastic way for me 
            to develop my ideas. I also love photography and particularly street photography. There is a beauty in capturing 
            people in wonderful unplanned moments. Lastly, I really like running.</p> 
        </Col>    
        
        </Row>

        {/* jsx styling */}
        <style jsx>
            {`  
                .aboutIntro {
                    padding-top: 15px;
                }

                h2 {
                    color:rgb(31, 202, 145);
                }

                p {
                    font-size: 15px;
                }
            `}
        </style>
    </div>
    
    <div className="skills">
        <h2>Skills</h2>

        <Row>
        <Col xs={6} md={4}>
            <ul>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>Content Creation</li>
                <li>HTML</li>
             </ul>
        </Col>
        <Col xs={6} md={6}>
            <ul>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MongoDB</li>
             </ul>
        </Col>
        </Row>
            
        {/* jsx styling */}
        <style jsx>
            {`  
                .skills {
                    padding-top: 15px;
                    padding-bottom: 10px;
                    padding-left: 10px;
                    position: relative;
                }

                h2 {
                    color:rgb(31, 202, 145);
                }

                p {
                    font-size: 15px;
                }
            `}
        </style>

    </div>

    <div className="education">
        <h2>Education</h2>
        <h3>Cape Peninsula University of Technology</h3>
        <p>National Diploma in Surface Design | Graduated in 2015</p>

        <h3>Long Island University Post</h3>
        <p>Certificate in Business Marketing | Received in 2017</p>

        <h3>HyperionDev</h3>
        <p>Full-Stack Web Developer Bootcamp | In Progress</p>

        

    <h2>Experience</h2>
    <h3>Fuzion Digital</h3>
    <h4>Senior Account Manager | April 2018 - Present</h4>
    <ul>
        <li>Management of client campaigns and budgets</li>
        <li>Paid advertising</li>
        <li>Mailer campaign conceptualisation and execution</li>
        <li>Ad hoc graphic design work for clients</li>
        <li>Creative direction for photo and video shoots</li>
        <li>Team member training</li>
        <li>Manage interns</li>
    </ul>

    <h3>Cultural Care</h3>
    <h4>Au Pair | February 2017 - March 2018</h4>
    <ul>
        <li>Daily childcare</li>
        <li>Conflict resolution</li>
        <li>Learning to adapt</li>
        <li>Organisational skills</li>
    </ul>

    <h3>Fuzion Digital</h3>
    <h4>Junior Account Manager & Designer | December 2015 - January 2017</h4>
    <ul>
        <li>Basic design work for clients</li>
        <li>Mailer campaign creation and send</li>
        <li>Management of client accounts</li>
        <li>Content and campaign creation</li>
    </ul>
    
    {/* jsx styling */}
    <style jsx>
            {`  
                .education {
                    padding-top: 5px;
                    padding-bottom: 10px;
                    position: relative;
                    padding-left: 10px;
                }

                h2 {
                    color:rgb(31, 202, 145);
                }

                h3 {
                    padding-left: 20px;
                }

                h4 {
                    padding-left: 30px;
                }

                p {
                    font-size: 15px;
                }
            `}
        </style>
    </div>

  </Layout>
);