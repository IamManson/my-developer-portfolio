//Import the Link API to support client-side navigation
import Link from 'next/link'

// Import modules and react-bootstrap components
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

// Import JSXStyle
import _JSXStyle from 'styled-jsx/style'

// Projects
export default () => (
  <Layout>
      <div className="projectOne">
        <h1>Portfolio</h1>
        <h2>Online Store Project</h2>
        <Image src="/static/images/project-mockup.png/" thumbnail />

        {/* Link to project */}
        <Button class="btn btn-primary btn-block btn-lg" href="https://github.com/IamManson/my-online-store" target="_blank">View Project</Button>

        {/* jsx styling */}
        <style jsx>
            {`  
                .projectOne {
                    padding-top: 15px;
                }

                h1 {
                    color:rgb(31, 202, 145);
                    padding-left: 5px;
                }

                h2 {
                    padding-left: 5px;
                }
            `}
        </style>
    </div>

    <div className="projectTwo">
        <h2>Minesweeper Game Project</h2>
        <Image src="/static/images/start_game.png/" thumbnail />
        {/* Link to project */}
        <Button class="btn btn-primary btn-block btn-lg" href="https://github.com/IamManson/my-minesweeper-game" target="_blank">View Project</Button>
        {/* Link to interact with the game/project */}
        <Button class="btn btn-primary btn-block btn-lg" href="https://km-minesweeper-game.herokuapp.com/" target="_blank">Play Game</Button>
        
        {/* jsx styling */}
        <style jsx>
            {`  
                .projectTwo {
                    padding-top: 25px;
                }

                h2 {
                    padding-left: 5px;
                }
            `}
        </style>
    </div>
    
    <div className="projectThree">
        <h2>Itunes Search Project</h2>
        <Image src="/static/images/search_in_results.png/" thumbnail />
        {/* Link to project */}
        <Button class="btn btn-primary btn-block btn-lg" href="https://github.com/IamManson/react-itunes-app" target="_blank">View Project</Button>
        
        {/* jsx styling */}
        <style jsx>
            {`  
                .projectThree {
                    padding-top: 25px;
                }

                h2 {
                    padding-left: 5px;
                }
            `}
        </style>
    </div>
  </Layout>
)