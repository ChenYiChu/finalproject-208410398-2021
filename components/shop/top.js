import React from 'react'
import styles from './shop.module.scss';

export default function top() {
    return (
        <div className={styles.card__title}>
        <div className={styles.icon}>
          <a href="#"><i className={styles.fa_fa_arrow_left}></i></a>
        </div>
        <h3>New products</h3>
      </div>
    )
}