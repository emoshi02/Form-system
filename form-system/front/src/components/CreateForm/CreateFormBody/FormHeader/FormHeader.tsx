import './FormHeader.scss';

export const FormHeader = () => {
  return (
    <section className="form-header">
      <input
        type="text"
        value="Untitled Form"
        className="form-title"
        id="title"
      />
      <input
        type="text"
        placeholder="Form description"
        className="form-desc"
        id="desc"
      />
      <input type="text" placeholder="Send to" required id="user-email" />
    </section>
  );
};
