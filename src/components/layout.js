import PropTypes from 'prop-types'
import { SSRProvider } from 'react-bootstrap'

function Layout({ children }) {
	return (
		<SSRProvider>
			<main>{children}</main>
		</SSRProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.any
}

export default Layout
