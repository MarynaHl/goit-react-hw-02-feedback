import React from 'react';
import s from './Container.module.css'

const Container = ({children, styles}) => {
  return (
    <div className={s.container} style={styles}>
      {children}
    </div>
  );
};

export default Container;