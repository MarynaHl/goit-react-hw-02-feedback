import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css'
import Container from '../Container';

const Section = ({children, title}) => {
  return (
    <div className={s.container}>
      <Container styles={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        borderRadius: '6px',
        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
      }}>
        <h3 style={{
          alignSelf: 'stretch',
          marginBottom: 20,
        }}>{title}</h3>
        {children}
      </Container>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: Proptypes.node
  };

export default Section;