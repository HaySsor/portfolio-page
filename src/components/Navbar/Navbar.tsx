'use client';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.scss';
import {motion} from 'framer-motion';

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
  {id: 2, name: 'Projekty', link: '/projects', img: '/web.png'},
  {id: 3, name: 'Kontakt', link: '/contacts', img: '/contact-book.png'},
];

type Props = {
  isOpen?: boolean;
  isMobileNav: boolean;
  toggleOpen: () => void;
};

export default function Navbar({isOpen, isMobileNav, toggleOpen}: Props) {
  return (
    <>
      <motion.nav
        variants={navAnimation}
        initial='hidden'
        animate={isMobileNav ? (isOpen ? 'show' : 'hidden') : 'show'}
        className={isMobileNav ? styles.navbarBox : styles.desktopNav}>
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
    </>
  );
}
