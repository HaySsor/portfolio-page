'use client';
import styles from './HeaderInfo.module.scss';
import {motion} from 'framer-motion';

const animation = {
  hidden: {
    x: -300,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type Props = {};

export default function HeaderInfo({}: Props) {
  return (
    <motion.div
      variants={animation}
      initial='hidden'
      animate="show"
      className={styles.textBox}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis
        repudiandae blanditiis ab, dolorum accusantium laborum sed quam quas
        culpa.
      </p>
    </motion.div>
  );
}
