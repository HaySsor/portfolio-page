import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './Carousel.module.scss';
import Image from 'next/image';

type Props = {
  gallery: string[] | null;
};

export default function Carousel({gallery}: Props) {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        className={styles.carousel}>
        {gallery?.map((item, index) => {
          return (
            <SwiperSlide className={styles.slide} key={index + 1}>
              <Image src={item} alt='.' fill className={styles.img}></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
