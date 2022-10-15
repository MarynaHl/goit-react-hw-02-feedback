import React from "react";

import { PropTypes } from "prop-types";

import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;