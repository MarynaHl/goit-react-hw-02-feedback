import React, { Component } from "react";

import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalCount = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / totalCount);
  }

  handleFeedback(type) {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  }

  render() {
    const {
      handleFeedback,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = state;

    const totalStatistic = countTotalFeedback.call(this);
    const positivePercentage = countPositiveFeedbackPercentage.call(this);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            handleFeedback={handleFeedback.bind(this)} //Без этого падает рендер
          />
        </Section>

        <Section title="Statistics">
          {totalStatistic ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalStatistic}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;