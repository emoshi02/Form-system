import { SubmitBtn } from '../../../SubmitButton/SubmitBtn';
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
      <SubmitBtn value="Submit" />
    </footer>
  );
};
