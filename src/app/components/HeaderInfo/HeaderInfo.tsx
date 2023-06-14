'use client';
import {DialogEndContext} from '@/app/Context/DialogEnd';
import styles from './HeaderInfo.module.scss';
import {motion} from 'framer-motion';
import {useContext} from 'react';

const animation = {
  hidden: {
    x: -600,
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
  const {dialogEnd} = useContext(DialogEndContext);
  return (
    <motion.div
      variants={animation}
      initial='hidden'
      animate={dialogEnd.home && 'show'}
      className={styles.textBox}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis
        repudiandae blanditiis ab, dolorum accusantium laborum sed quam quas
        culpa.
      </p>
    </motion.div>
  );
}
