import React from 'react'
import styles from './Albumcard.module.css'
function Albumcard({img,follows,category}) {
  return (
    <div className={styles.card}>
        <div className={styles.details}>
            <img src={img} alt='alubum-image' className={styles.albumimg}/>
            <div className={styles.followers}>
                <p className={styles.textfollow}>{follows} Follows</p>
            </div>
        </div>
        <h5 className={styles.categorytext}>{category}</h5>

    </div>
  )
}

export default Albumcard