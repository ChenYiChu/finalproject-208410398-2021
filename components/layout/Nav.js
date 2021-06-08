import styles from './nav.module.scss';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <label for='check' className={styles.navContainer__checkBtn}></label>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__listLogo}>
            <Link href='/'>
              <img src='/favicon.svg' alt='' />
            </Link><h2>208410398</h2>
          </li>
          <li className={styles.nav__listItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.nav__listItem}>
            <Link href='/shop'>Shop</Link>
          </li>

          <li className={styles.nav__listItem}>
            Category
            <ul className={styles.nav__listItemDrop}>
              <li>
                <Link href='/shop/hats'>Hats</Link>
              </li>
              <li>
                <Link href='/shop/jackets'>Jackets</Link>
              </li>
              <li>
                <Link href='/shop/sneakers'>Sneakers</Link>
              </li>
              <li>
                <Link href='/shop/womens'>Women's</Link>
              </li>
              <li>
                <Link href='/shop/mens'>Men's</Link>
              </li>
            </ul>
          </li>

          <li className={styles.nav__listItem}>
            <Link href='/api_product'>API-Project</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
