import styles from './AboutMeSkillsItem.module.scss';

type Props = {
  skill: Skill;
};

export default function AboutMeSkillsItem({skill}: Props) {
  const {name, rate} = skill;

    


  return (
    <div className={styles.container}>
      <p>{name}</p>
      <p>{rate}</p>
    </div>
  );
}
