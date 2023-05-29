import AboutMeSkillsItem from '../AboutMeSkillsItem/AboutMeSkillsItem';
import styles from './AboutMeSkills.module.scss';
import {skills} from '@/data/skills';

type Props = {};

export default function AboutMeSkills({}: Props) {
  return (
    <div className={styles.container}>
      {skills.map((skill) => {
        return <AboutMeSkillsItem key={skill.name} skill={skill} />;
      })}
    </div>
  );
}
