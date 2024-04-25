import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from  '/public/images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.headerTitle}>Lagom Travels</h1>
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/mytravels" className={styles.headerLink}>
          My Travels
        </Link>
        <Link href="/plantravels" className={styles.headerLink}>
          Plan Travels
        </Link>
      </div>
    </header>
  );
}

export default Header;
