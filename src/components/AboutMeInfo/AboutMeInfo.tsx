'use client';
import {DialogEndContext} from '@/app/Context/DialogEnd';
import styles from './AboutMeInfo.module.scss';
import {motion} from 'framer-motion';
import {useContext} from 'react';

const animation = {
  hidden: {
    x: 400,
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

export default function AboutMeInfo({}: Props) {
  const {dialogEnd} = useContext(DialogEndContext);

  return (
    <motion.div
      variants={animation}
      initial='hidden'
      animate={dialogEnd && 'show'}
      className={styles.container}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quod ipsum
        architecto fuga, omnis mollitia repellendus reprehenderit animi totam
        temporibus sunt, eos molestias. Repellat quidem reprehenderit assumenda
        nesciunt! Praesentium, tempore dolorem? In ipsa quasi dignissimos quis,
        corporis velit eaque facilis a voluptate ea molestias expedita doloribus
        incidunt autem doloremque! Saepe.
      </p>
    </motion.div>
  );
}
