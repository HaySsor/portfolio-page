'use client';
import {useEffect, useState, useRef, useId} from 'react';
import styles from './AboutMeSkillsItem.module.scss';
import Image from 'next/image';
import {motion, useInView} from 'framer-motion';

const animation = {
  move: {
    y: [10, -10, 10, -10, 10],
    transition: {
      duration: 10,
      repeat: Infinity,
    },
  },
};

type Props = {
  skill: Skill;
};

export default function AboutMeSkillsItem({skill}: Props) {
  const [arrayImages, setArrayImages] = useState<number[]>([]);
  const {name, rate, imageSrc} = skill;
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    const array = Array(rate).fill(1);
    while (array.length < 5) {
      array.push(0);
    }
    setArrayImages(array);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={animation}
      animate={isInView && 'move'}
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
      <div className={styles.imageContainer}>
        {arrayImages.map((image, i) => {
          return image === 1 ? (
            <div className={styles.imageBox}>
              <Image
                src='/crab.png'
                fill
                alt='Crab Icon'
                className={styles.color}
                key={i + 1}
              />
            </div>
          ) : (
            <div className={styles.imageBox}>
              <Image
                src='/crab.png'
                alt='Crab Icon'
                className={styles.gray}
                key={i + 1}
                fill
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
