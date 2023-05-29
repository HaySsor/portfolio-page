import Link from 'next/link';
import styles from './NavbarItem.module.scss';
import {motion} from 'framer-motion';
import Image from 'next/image';

type Props = {
  name: string;
  link: string;
  img: string;
  toggleOpen: () => void;
};

export default function NavbarItem({name, link, img, toggleOpen}: Props) {
  return (
    <motion.li>
      <Link href={link} className={styles.link} onClick={toggleOpen}>
        <Image
          src={img}
          alt={name}
          width={50}
          height={50}
          className={styles.img}></Image>
        {name}
      </Link>
    </motion.li>
  );
}
