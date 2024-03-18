import css from './Options.module.css';

const Options = ({onClick, total, onClickReset}) => {

  return (
    <div className={css.block}>
      <button type="click" name="good" onClick={onClick}>Good</button>
      <button type="click" name="neutral" onClick={onClick}>Neutral</button>
      <button type="click" name="bad" onClick={onClick}>Bad</button>
      {total > 0 &&  <button type="click" name="reset" onClick={onClickReset}>Reset</button>}
    </div>
  );
};

export default Options;
