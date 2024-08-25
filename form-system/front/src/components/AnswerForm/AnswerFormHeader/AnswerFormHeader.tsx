import classes from './AnswerFormHeader.module.scss';

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
    <section className={classes.answerFormHeader}>
      <h1 className={classes.answerFormTitle}>{title}</h1>
      <p className={classes.answerFormDesc}>{desc}</p>
      <p className={classes.answerFormUser}>{user}</p>
      <p className={classes.required}>* Indicates the Required Question.</p>
    </section>
  );
};
