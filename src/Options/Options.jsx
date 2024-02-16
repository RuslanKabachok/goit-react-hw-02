import css from '../Options/Options.module.css';
import Reset from '../Reset/Reset';

function Options({ options, onChange, toggleBtn, onReset }) {
  const buttons = Object.keys(options);
  return (
    <div className={css.btnBox}>
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={css.button}
            onClick={() => {
              onChange(button);
            }}
          >
            {button}
          </button>
        );
      })}
      {toggleBtn && <Reset onClear={onReset} />}
    </div>
  );
}

export default Options;
