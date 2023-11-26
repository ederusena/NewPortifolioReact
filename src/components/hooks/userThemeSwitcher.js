import { useState, useEffect } from 'react'

const UserThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)'
  const [mode, setMode] = useState('')

  function addClass(className) {
    document.documentElement.classList.add(className)
  }

  function removeClass(className) {
    document.documentElement.classList.remove(className)
  }

 

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light'

        setMode(check)

        check === 'dark' ? addClass('dark') : removeClass('dark')
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light'

        setMode(check)
        check === 'dark' ? addClass('dark') : removeClass('dark')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else if (mode === 'light') {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return [mode, setMode]
}

export default UserThemeSwitcher
