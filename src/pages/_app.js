import PropTypes from 'prop-types'

import Layout from '../components/layout'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

MyApp.propTypes = {
	Component: PropTypes.element,
	pageProps: PropTypes.object
}

export default MyApp
