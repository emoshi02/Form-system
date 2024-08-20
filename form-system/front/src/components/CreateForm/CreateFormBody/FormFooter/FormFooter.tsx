import { SubmitButton } from '../../../SubmitButton/SubmitButton';
import './FormFooter.scss';

export const FormFooter = ({
  onAddQuestionClick,
}: {
  onAddQuestionClick: () => void;
}) => {
  return (
    <footer className="footer">
      <button onClick={onAddQuestionClick}>
        <span className="material-symbols-outlined add">add</span>
      </button>
      <SubmitButton value="Submit" />
    </footer>
  );
};
