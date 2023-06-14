'use client';
import {useEffect, useState} from 'react';
import styles from './NavbarContainer.module.scss';
import Navbar from '../Navbar/Navbar';
import NavbarButton from '../NavbarButton/NavbarButton';
import {useWindowSize} from '@/hooks/useWindowSize';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNav, setMobileNav] = useState(false);

  const resize = useWindowSize();

  useEffect(() => {
    if (resize >= 768) {
      setMobileNav(false);
      setIsOpen(true);
    } else {
      setMobileNav(true);
      setIsOpen(false);
    }
  }, [resize]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.headerBox}>
      <Link href={'/'} className={styles.logo}>
        <Image src='/crab.png' alt='crab logo' width={50} height={50}></Image>
      </Link>

      {isMobileNav && <NavbarButton toggleOpen={toggleOpen} isOpen={isOpen} />}
      <Navbar
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        isMobileNav={isMobileNav}
      />
    </header>
  );
}
