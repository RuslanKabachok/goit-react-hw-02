import css from '../App/App.module.css';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
// import Reset from '../Reset/Reset';
import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const isResetVisible = totalFeedback > 0;

  return (
    <>
      <div className={css.app}>
        <Description
          title="Sip Happens Café"
          text="Please leave your feedback about our service by selecting one of the options below."
        />
        <Options
          options={feedback}
          onChange={updateFeedback}
          toggleBtn={isResetVisible}
          onReset={resetFeedback}
        />

        <div>
          {totalFeedback === 0 ? (
            <Notification />
          ) : (
            <Feedback stats={feedback} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
