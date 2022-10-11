import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const onClickBtn = (feedbackType) => () => {
    onLeaveFeedback(feedbackType);
  };

  return (
    <ul className={s.container}>
      {Object.keys(options).map(feedbackType => {
        return (
          <li
            key={feedbackType}
            className={s.item}
          >
            <button
              className={s.btn}
              onClick={onClickBtn(feedbackType)}
            >
              {feedbackType}
            </button>
          </li>
        )
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;