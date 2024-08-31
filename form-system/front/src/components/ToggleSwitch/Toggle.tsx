import classNames from 'classnames';
import classes from './Toggle.module.scss';

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
    <span className={classes.toggleWrapper}>
      <p className={classes.pText} data-hook="p-text">
        {label}
      </p>
      <label className={classes.switch} data-hook="switch">
        <input
          className={classes.requiredToggleInput}
          type="checkbox"
          checked={isRequired}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setRequired(event.target.checked)
          }
          data-hook="required-toggle-input"
        />
        <span className={classNames(classes.slider, classes.round)}></span>
      </label>
    </span>
  );
};
