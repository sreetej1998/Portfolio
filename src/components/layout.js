/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Home from './home/Home'
import Experience from './experience/Experience'
import Contact from './contact/Contact'

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Home/>
      <Experience/>
      <Contact/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
