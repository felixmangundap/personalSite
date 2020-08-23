import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/layout.css'
import * as style from  '../styles/style.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Personal Portfolio' },
            { name: 'keywords', content: 'felix, mangundap, felix mangundap, waterloo, uw, university of waterloo, computer science, software engineer' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={style.main}>
          <div className={style.container}>
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
