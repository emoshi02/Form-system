import './FormItem.scss';
import { useNavigate } from 'react-router-dom';

export type FormDataType = {
  id: number;
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
  onDeleteBtn,
}: {
  formData: FormDataType;
  onDeleteBtn: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="form-item-wrapper"
      onClick={() =>
        navigate(`/updateForm/${formData.id}`, { state: { formData } })
      }
    >
      <div className="form-item-image" id={`form-image ${formData.id}`}>
        <img
          src="https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico"
          alt={`form ${formData.id}`}
        />
      </div>
      <div className="form-item-title">
        <p className="form-item-text">{formData.title}</p>
        <span
          className="material-symbols-outlined form-item-delete-btn"
          id={`button${formData.id}`}
          onClick={onDeleteBtn}
        >
          delete
        </span>
      </div>
    </div>
  );
};
