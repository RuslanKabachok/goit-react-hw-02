import css from '../Reset/Reset.module.css';

export default function Reset({ onClear }) {
  return (
    <button onClick={onClear} className={css.reset}>
      Reset
    </button>
  );
}
