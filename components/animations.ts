export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const upDesc = {
  initial: {
    opacity: 0,

    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.6 },
  },
};
export const upText = {
  initial: {
    opacity: 0,

    bottom: -100,
  },
  animate: {
    opacity: 1,
    bottom: 20,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.6 },
  },
};

export const descText = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.05 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

// export const opacity = {
//   initial: {
//     opacity: 0,
//   },
//   open: {
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
//   closed: {
//     opacity: 0,
//     transition: { duration: 0.5 },
//   },
// };
