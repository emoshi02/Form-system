import { SubmitButton } from '../../../SubmitButton/SubmitButton';
import classes from './FormFooter.module.scss';

export const FormFooter = ({
  onAddQuestionClick,
}: {
  onAddQuestionClick: () => void;
}) => {
  return (
    <footer className={classes.footer}>
      <button onClick={onAddQuestionClick}>
        <span className={`material-symbols-outlined ${classes.add}`}>add</span>
      </button>
      <SubmitButton value="Submit" />
    </footer>
  );
};
