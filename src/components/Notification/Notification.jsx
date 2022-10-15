import React from "react";

import { PropTypes } from "prop-types";

import styles from "./Notification.module.css";

const Notification = ({ message }) => (
  <div className={styles.notification}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;