'use client';
import styles from './NavbarButton.module.scss';
import {motion} from 'framer-motion';
import {buttonAnimation, navbarAnimation} from './animations';

type Props = {
  toggleOpen: () => void;
  isOpen: boolean;
};

export default function NavbarButton({isOpen, toggleOpen}: Props) {
  return (
    <motion.button
      onClick={toggleOpen}
      variants={buttonAnimation}
      initial='isClose'
      animate={isOpen ? 'isOpen' : 'isClose'}
      className={styles.button}>
      <motion.div
        className={styles.navbarBar}
        variants={navbarAnimation}
        animate={isOpen ? 'isOpen1' : 'isClose'}></motion.div>
      <motion.div
        className={styles.navbarBar}
        variants={navbarAnimation}
        animate={isOpen ? 'isOpen2' : 'isClose'}></motion.div>
      <motion.div
        className={styles.navbarBar}
        variants={navbarAnimation}
        animate={isOpen ? 'isOpen3' : 'isClose'}></motion.div>
    </motion.button>
  );
}
