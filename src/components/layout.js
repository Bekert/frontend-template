import Head from 'next/head'
import PropTypes from 'prop-types'

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Next JS Template</title>
				<meta name='description' content='Description of simple Next JS template' />
			</Head>
			<main>{children}</main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.any
}

export default Layout
