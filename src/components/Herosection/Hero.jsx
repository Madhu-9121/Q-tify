import React, { Component } from 'react'
import styles from './Hero.module.css'
import {ReactComponent as Headphoneimg} from '../../assets/Headphone.svg'
export class Hero extends Component {
  render() {
    return (
      <div className={styles.parent}>
        <header className={styles.headline}>
            <h5>100 Thousand Songs, ad-free</h5>
            <h5>Over thousands podcast episodes</h5>
        </header>
        <div className={styles.image}>
           <Headphoneimg/>
        </div>
      </div>
    )
  }
}

export default Hero