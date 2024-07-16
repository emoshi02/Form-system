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
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(event.target.checked);
  };

  return (
    <span className="toggle-wrapper">
      <p className="p-text">{label}</p>
      <label className="switch">
        <input
          type="checkbox"
          checked={isRequired}
          onChange={handleToggleChange}
        />
        <span className="slider round"></span>
      </label>
    </span>
  );
};
