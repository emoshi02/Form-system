import './AnswerFormHeader.scss';

export const AnswerFormHeader = ({
  title = 'Untitled Form',
  desc,
  user,
}: {
  title?: string;
  desc?: string;
  user?: string;
}) => {
  return (
    <section className="answer-form-header">
      <h1 className="answer-form-title">{title}</h1>
      <p className="answer-form-desc">{desc}</p>
      <p className="answer-form-user">{user}</p>
      <p className="required">* Indicates the Required Question.</p>
    </section>
  );
};
