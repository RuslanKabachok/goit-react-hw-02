import css from './Feedback.module.css';

function Feedback({ stats }) {
  return (
    <>
      <ul>
        <li className={css.item}>Good: {stats.good}</li>
        <li className={css.item}>Neutral: {stats.neutral}</li>
        <li className={css.item}>Bad: {stats.bad}</li>
      </ul>
    </>
  );
}

export default Feedback;
