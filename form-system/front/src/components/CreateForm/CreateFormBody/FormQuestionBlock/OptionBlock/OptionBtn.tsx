import './OptionStyle.scss';

export const OptionBtn = ({
  onAddOption,
  optionIcon,
}: {
  onAddOption: () => void;
  optionIcon: string;
}) => {
  return (
    <span className="option-wrapper">
      <span className="material-symbols-outlined">{optionIcon}</span>
      <button className="add-option-button" onClick={onAddOption}>
        Add option
      </button>
    </span>
  );
};
