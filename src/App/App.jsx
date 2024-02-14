// import { useState } from 'react';
import css from '../App/App.module.css';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';

function App() {
  const feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const [feedback.good, ]

  return (
    <>
      <div className={css.app}>
        <Description
          title="Sip Happens Café"
          text="Please leave your feedback about our service by selecting one of the options below."
        />
        <Options options={feedback} />
        <Feedback stats={feedback} />
      </div>
    </>
  );
}

export default App;
