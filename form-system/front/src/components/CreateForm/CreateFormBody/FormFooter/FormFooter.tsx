import { SubmitBtn } from "../../../SubmitButton/SubmitBtn";
import "./FormFooter.scss";

export const FormFooter = () => {
  return (
    <footer className="footer">
      <span className="material-symbols-outlined add">add</span>
      <SubmitBtn value="Submit" />
    </footer>
  );
};
