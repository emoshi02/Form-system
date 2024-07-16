import './FormItem.scss';

export const FormItem = ({
  form_id,
  form_title,
  onDeleteBtn,
}: {
  form_id: number;
  form_title: string;
  onDeleteBtn: () => void;
}) => {
  return (
    <div className="form-item-wrapper">
      <div className="form-item-image" id={`form-image ${form_id}`}>
        <img
          src="https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico"
          alt={`form ${form_id}`}
        />
      </div>
      <div className="form-item-title">
        <p className="form-item-text">{form_title}</p>
        <span
          className="material-symbols-outlined form-item-delete-btn"
          id={`button${form_id}`}
          onClick={onDeleteBtn}
        >
          delete
        </span>
      </div>
    </div>
  );
};
