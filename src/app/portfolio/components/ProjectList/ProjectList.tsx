'use client';
import {projectsList} from '@/data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

import styles from './ProjectList.module.scss';

type Props = {};

function ProjectList({}: Props) {
  return (
    <div className={styles.wrapper}>
      {projectsList.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default ProjectList;
