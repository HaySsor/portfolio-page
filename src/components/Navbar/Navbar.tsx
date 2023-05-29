'use client';
import Link from 'next/link';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.scss';
import {motion} from 'framer-motion';
import Image from 'next/image';

const navAnimation = {
  hidden: {
    x: '100%',
    transition: {
      delay: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const links: Links[] = [
  {id: 1, name: 'O mnie', link: '/', img: '/crab.png'},
  {id: 2, name: 'Projekty', link: '/portfolio', img: '/web.png'},
  {id: 3, name: 'Kontakt', link: '/contact', img: '/contact-book.png'},
];

type Props = {
  isOpen: boolean;
  isMobileNav: boolean;
  toggleOpen: () => void;
};

export default function Navbar({isOpen, isMobileNav, toggleOpen}: Props) {
  return (
    <motion.nav
      variants={navAnimation}
      initial='hidden'
      animate={isOpen ? 'show' : 'hidden'}
      className={styles.navbarBox}>
      {!isMobileNav && (
        <Link href='/'>
          <Image
            src='/crab.png'
            width={40}
            height={40}
            alt='Crab Icon'
            className={styles.logo}
          />
        </Link>
      )}
      <motion.ul className={styles.navList}>
        {links.map((navLink) => {
          return (
            <NavbarItem
              key={navLink.id}
              name={navLink.name}
              link={navLink.link}
              img={navLink.img}
              toggleOpen={toggleOpen}
            />
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
