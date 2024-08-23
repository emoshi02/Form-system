import './Toggle.scss';

export const Toggle = ({
  label,
  isRequired,
  setRequired,
}: {
  label: string;
  isRequired: boolean;
  setRequired: (required: boolean) => void;
}) => {
  return (
    <span className="toggle-wrapper">
      <p className="p-text">{label}</p>
      <label className="switch">
        <input
          className="required-toggle-input"
          type="checkbox"
          checked={isRequired}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setRequired(event.target.checked)
          }
        />
        <span className="slider round"></span>
      </label>
    </span>
  );
};
