import { SubmitButton } from '../../SubmitButton/SubmitButton';
import classes from './AnswerFormFooter.module.scss';

export const AnswerFormFooter = () => {
  return (
    <footer className={classes.footer}>
      <SubmitButton value="Submit" />
    </footer>
  );
};
