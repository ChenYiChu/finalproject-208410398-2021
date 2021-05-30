import React from 'react';
import Link from 'next/link';
import styles from './shop.module.scss';
import top from './top'

export default function Item({name, remote_url, price}) {
    return (
    <div className={styles.card}>
        <div className={styles.card__title}>
        <div className={styles.icon}>
          <a href="#"><i className={styles.fa_fa_arrow_left}></i></a>
        </div>
        <h3>New products</h3>
      </div>
      <div className={styles.card__body}>
        <div className={styles.half}>
          <div className={styles.featured_text}>
            <p className={styles.sub}>{name}</p>
            <p className={styles.price}>${price}</p>
          </div>
          <div className={styles.image}>
            <img src={remote_url} alt=""></img>
          </div>
        </div>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.recommend}>
          <p>Recommended by</p>
          <h3>Andrew Palmer</h3>
        </div>
        <div className={styles.action}>
          <button>Buy it</button>
        </div>
      </div>
    </div>
    )
}
