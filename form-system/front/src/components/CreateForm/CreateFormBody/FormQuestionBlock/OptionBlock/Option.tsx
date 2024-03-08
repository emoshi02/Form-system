import './OptionStyle.scss';

export const Option = ({ opt }: { opt: number }) => {
  return (
    <span className="option-block">
      <span className="option-wrapper">
        <span className="material-symbols-outlined">circle</span>
        <input
          type="text"
          className="add-option"
          placeholder={`Option ${opt}`}
        />
      </span>
      <span className="material-symbols-outlined">close</span>
    </span>
  );
};
