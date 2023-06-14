'use client';
import {useParams} from 'next/navigation';
import {projectsList} from '@/data/projects';
import {useEffect, useState} from 'react';

import styles from './page.module.scss';
import Carousel from './components/Carousel/Carousel';
import Info from './components/Info/Info';
import Link from 'next/link';
import Crab from '@/components/Crab/Crab';
import Loading from '@/app/loading';

type Props = {};

export default function page({}: Props) {
  const [project, setProject] = useState<null | Project>(null);
  const [projectDialog, setProjectDialog] = useState<string[]>([]);
  const {id} = useParams();

  useEffect(() => {
    const picked = projectsList.find(
      (project) => parseFloat(id) === project.id
    );
    if (picked) {
      setProject(picked);
      setProjectDialog(picked.dialogTextArray);
    }
  }, [id]);

  return (
    <>
      {project ? (
        <main className={styles.main}>
          <Link href={'./projects'} className={styles.back}>
            &larr; Back
          </Link>
          <Carousel gallery={project && project.photoGallery} />
          <Info project={project && project} />
          <Crab
            page='project'
            projectName={project.dialog}
            texts={projectDialog}
          />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
