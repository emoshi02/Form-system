import classes from './FormItem.module.scss';
import { useNavigate } from 'react-router-dom';

export type FormDataType = {
  id: string;
  title: string;
  desc?: string;
  user?: string;
  questions?: string[];
  optionType?: string[];
  image?: (string | null)[];
  isRequired?: boolean[];
  options?: string[][];
};

export const FormItem = ({
  formData,
  onDeleteButtonClick,
  isAnswerForm,
}: {
  formData: FormDataType;
  onDeleteButtonClick: () => void;
  isAnswerForm: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.formItemWrapper}
      onClick={() =>
        navigate(
          `${isAnswerForm ? `/answerForm/${formData.id}` : `/updateForm/${formData.id}`}`,
          { state: { formData } },
        )
      }
      data-hook="form-item-wrapper"
    >
      <div className={classes.formItemImage} id={`form-image ${formData.id}`}>
        <img
          src="https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico"
          alt={`form ${formData.id}`}
        />
      </div>
      <div className={classes.formItemTitle}>
        <p className={classes.formItemText}>{formData.title}</p>
        <span
          className="material-symbols-outlined"
          id={`button${formData.id}`}
          onClick={(event) => {
            event.stopPropagation();
            onDeleteButtonClick();
          }}
        >
          delete
        </span>
      </div>
    </div>
  );
};
