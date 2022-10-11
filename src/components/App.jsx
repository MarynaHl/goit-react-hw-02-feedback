import React, { Component } from 'react';
import s from './App.module.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  };

  onLeaveFeedback = (feedbackType) => {
    this.setState(prev => ({ [feedbackType]: prev[feedbackType] + 1 }));
  };

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();

    return (
      <div className={s.container}>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title='Statistics'>
          {!total
            ? <Notification message='There is no feedback'/>
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />}
        </Section>
      </div>
    );
  }
}

export default App;