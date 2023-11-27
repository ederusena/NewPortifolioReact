import React from 'react'
import PropTypes from 'prop-types'

function Layout({children, className=""}) {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32  lg:p-16 md:p-12 sm:p-8 ${className}`}>
       {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default Layout