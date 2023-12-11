import PropTypes from 'prop-types'
import React from 'react'

function Layout({ children, className = '' }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32  lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
}

export default Layout
