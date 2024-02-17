import css from './Feedback.module.css';

function Feedback({ stats, sum }) {
  const averagePositiveFeedback = Math.round(
    ((stats.good + stats.neutral) / sum) * 100
  );

  return (
    <>
      <ul>
        <li className={css.item}>Good: {stats.good}</li>
        <li className={css.item}>Neutral: {stats.neutral}</li>
        <li className={css.item}>Bad: {stats.bad}</li>
        <li className={css.item}>Total: {sum}</li>
        <li className={css.item}>
          Positive:
          {averagePositiveFeedback}%
        </li>
      </ul>
    </>
  );
}

export default Feedback;
