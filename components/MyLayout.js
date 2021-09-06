// Import the Link API to support client-side navigation
import Link from 'next/link'

// Importing next/react-bootstrap components
import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
}

// Layout
const Layout = (props) => (
   <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
  	</div>
  </div>
)

export default Layout