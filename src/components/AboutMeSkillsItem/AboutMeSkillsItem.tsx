'use client';
import {useEffect, useState} from 'react';
import styles from './AboutMeSkillsItem.module.scss';
import Image from 'next/image';
import {motion} from 'framer-motion';

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

type Props = {
  skill: Skill;
};

export default function AboutMeSkillsItem({skill}: Props) {
  const [arrayImages, setArrayImages] = useState<number[]>([]);
  const {name, rate, imageSrc} = skill;

  useEffect(() => {
    const array = Array(rate).fill(1);
    while (array.length < 5) {
      array.push(0);
    }
    setArrayImages(array);
  }, []);

  return (
    <motion.div
      variants={animation}
      initial='hidden'
      animate='show'
      className={styles.container}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>{name}</h3>
        <Image
          src={imageSrc}
          alt={name}
          width={25}
          height={25}
          className={styles.titleImage}
        />
      </div>
      <div className={styles.imageBox}>
        {arrayImages.map((image) => {
          return image === 1 ? (
            <Image
              src='/crab.png'
              width={25}
              height={25}
              alt='Crab Icon'
              className={styles.color}
              key={Math.floor(Math.random() * 100)}
            />
          ) : (
            <Image
              src='/crab.png'
              width={25}
              height={25}
              alt='Crab Icon'
              className={styles.gray}
              key={Math.floor(Math.random() * 100)}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
