import css from './Options.module.css';

const Options = ({ onClick, total, onClickReset }) => {
  return (
    <div className={css.block}>
      <button
        className={css.btnOption}
        type="click"
        name="good"
        onClick={onClick}
      >
        Good
      </button>
      <button
        className={css.btnOption}
        type="click"
        name="neutral"
        onClick={onClick}
      >
        Neutral
      </button>
      <button
        className={css.btnOption}
        type="click"
        name="bad"
        onClick={onClick}
      >
        Bad
      </button>

      {total > 0 && (
        <button
          className={css.btnOption}
          type="click"
          name="reset"
          onClick={onClickReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
