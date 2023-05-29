export const animationShow = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
};
export const moveAnimation = {
  init: {
    x: 200,
  },
  hidden: {
    x: [0, 10, 20, 40, 50, 70, 80, 90, 100, 200],
    rotate: [0, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5],
    transition: {ease: 'easeInOut', duration: 1.5, delay: 0.5},
  },
  show: {
    x: [200, 100, 90, 80, 70, 50, 40, 20, 10, 0],
    rotate: [5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
    transition: {ease: 'easeInOut', duration: 1.5},
  },
};
