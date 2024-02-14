import css from '../Options/Options.module.css';

function Options({ options }) {
  const buttons = Object.keys(options);
  return (
    <div className={css.btnBox}>
      {buttons.map((button) => {
        return (
          <button key={button} className={css.button}>
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
