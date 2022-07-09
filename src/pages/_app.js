import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { SSRProvider } from 'react-bootstrap'

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SSRProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.element,
	pageProps: PropTypes.object
}

export default MyApp
