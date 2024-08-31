import classes from './OptionStyle.module.scss';

export const OptionBtn = ({
  onAddOption,
  optionIcon,
}: {
  onAddOption: () => void;
  optionIcon: string;
}) => {
  return (
    <span className={classes.optionWrapper}>
      <span className="material-symbols-outlined">{optionIcon}</span>
      <button
        className={classes.addOptionButton}
        onClick={onAddOption}
        data-hook="add-option-button"
      >
        Add option
      </button>
    </span>
  );
};
