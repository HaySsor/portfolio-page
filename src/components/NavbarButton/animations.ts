export const buttonAnimation = {
  isClose: {
    backgroundColor: 'white',
    transition: {
      duration: 1,
    },
  },
  isOpen: {
    backgroundColor: 'tomato',
    transition: {
      duration: 1,
    },
  },
};
export const navbarAnimation = {
  isClose: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  isOpen1: {
    rotate: 40,
    y: 7,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
  isOpen2: {
    rotate: -40,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
  isOpen3: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};
