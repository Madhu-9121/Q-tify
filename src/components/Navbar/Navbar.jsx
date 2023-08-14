import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './navbar.module.css'
import Search from '../Searchbar/Search'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <Search/>
      <Button
      children="Give Feedback"
      />
    </nav>
  )
}

export default Navbar