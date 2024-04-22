import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; 
import Image from 'next/image';


function Header() {
  return (
    <header className={styles.header}>
      <Image className="logo"
      src="/images/logo.png"
      alt="Lagom Travels logo"
      width={374}
      height={134}
      />
      <Link href="/mytravels" > <h2 className="headerLink">My Travels</h2></Link>
      <Link href="/plantravels" > <h2 className="headerLink">Plan Travels</h2></Link>
    </header>
  );
}

export default Header;
