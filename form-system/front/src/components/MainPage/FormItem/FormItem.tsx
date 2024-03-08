import "./FormItem.scss";

export const FormItem = ({
  form_id,
  form_title,
}: {
  form_id: number;
  form_title: string;
}) => {
  return (
    <div className="form-item-wrapper">
      <div className="form-item-image" id={`form-image ${form_id}`}>
        <img
          src="../../../assets/images/form-image.png"
          alt="Form Image"
          className="form-image--small"
        />
      </div>
      <div className="form-item-title">
        <p className="form-item-text">{form_title}</p>
        <span
          className="material-symbols-outlined form-item-delete-btn"
          id={`button${form_id}`}
        >
          delete
        </span>
      </div>
    </div>
  );
};
