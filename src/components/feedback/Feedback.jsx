import css from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <p className={css.textFeedback}>Good: {good}</p>
      <p className={css.textFeedback}>Neutral: {neutral}</p>
      <p className={css.textFeedback}>Bad: {bad}</p>
      <p className={css.textFeedback}>Total: {total}</p>
      <p className={css.textFeedback}>Positive: {positive}%</p>
    </>
  );
};

export default Feedback;
