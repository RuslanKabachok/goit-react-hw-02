import css from '../App/App.module.css';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedStats = localStorage.getItem('stats');
    if (savedStats !== null) {
      return JSON.parse(savedStats);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('stats', JSON.stringify(feedback));
  }, [feedback]);

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
            <Feedback stats={feedback} sum={totalFeedback} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
