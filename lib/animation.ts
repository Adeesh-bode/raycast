export const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.4,
      },
    },
  };
  
  export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7},
    },
  };
  
  
  export const up = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, yoyo: Infinity },
  },
};

export const ItemUp = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3.5,
        yoyo: Infinity,
        staggerChildren: 0.6, // if you want to use stagger here
      },
    },
  };

    
    export const show = {
      hidden: { opacity: 0.3 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7},
      },
    };
    

