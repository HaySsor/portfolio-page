'use client';
import Image from 'next/image';
import React, {useEffect, useState, useContext} from 'react';
import styles from './Crab.module.scss';
import {motion, AnimatePresence} from 'framer-motion';
import {usePrintText} from '@/hooks/usePlayText';
import {animationShow, moveAnimation} from './animations';
import {useWait} from '@/hooks/useWait';
import {DialogEndContext} from '@/app/Context/DialogEnd';

type Props = {
  texts: string[];
  page: string;
  projectName?: string;
};

export default function Crab({texts, page, projectName}: Props) {
  const [displayText, setDisplayText] = useState('');

  const {dialogEnd, handleDialogEnd} = useContext(DialogEndContext);

  useEffect(() => {
    const handlePlayText = async () => {
      for (let item of texts) {
        if (item === texts[0]) {
          setDisplayText(texts[0]);
        } else {
          const text = await usePrintText(item, 1300);
          setDisplayText(text);
        }
      }
      await useWait(1500);
      projectName
        ? await handleDialogEnd(page, true, projectName)
        : await handleDialogEnd(page, true);
    };
    setTimeout(() => {
      handlePlayText();
    }, 1600);
  }, []);

  return (
    <AnimatePresence>
      {dialogEnd[page as keyof DialogEnd] || dialogEnd.projects[projectName as keyof Projects] ? null : (
        <div className={styles.crabContainer}>
          <motion.div
            key={1}
            variants={animationShow}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={styles.textBubble}>
            <span className={styles.text}>{displayText}</span>
          </motion.div>
          <motion.div
            key={2}
            variants={moveAnimation}
            initial='init'
            animate='show'
            exit='hidden'
            className={styles.crabBox}
            transition={{ease: 'easeInOut', duration: 1.5}}>
            <Image src='/crab.png' width={100} height={100} alt='Crab Icon' />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
