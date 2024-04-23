import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from  '/public/images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          {
            <Image
              className={styles.logo}
              src={logo}
              alt="Lagom Travels logo"
              width={364}
              height={236}
            />}
        </Link>
      </div>
      <h1 className={styles.headerTitle}>Lagom Travels</h1>
      <div className={styles.linksContainer}>
      <Link href="/mytravels">
        <h2 className={styles.headerLink}>My Travels</h2>
      </Link>
      <Link href="/plantravels">
        <h2 className={styles.headerLink}>Plan Travels</h2>
      </Link>
</div>
    </header>
  );
}

export default Header;
