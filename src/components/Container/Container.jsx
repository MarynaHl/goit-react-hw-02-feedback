import React from 'react';
import s from './Container.module.css'

const Container = ({children, styles}) => {
  return (
    <div className={s.container} style={styles}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: React.Proptypes.node.isRequired
};

export default Container;