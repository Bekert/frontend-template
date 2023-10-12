import PropTypes from 'prop-types'

import Layout from '../components/layout'

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object
}

export default MyApp
