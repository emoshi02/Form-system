import { SubmitBtn } from '../../../SubmitButton/SubmitBtn';
import './FormFooter.scss';

export const FormFooter = () => {
  return (
    <footer className="footer">
      <button>
        <span className="material-symbols-outlined add">add</span>
      </button>
      <SubmitBtn value="Submit" />
    </footer>
  );
};
