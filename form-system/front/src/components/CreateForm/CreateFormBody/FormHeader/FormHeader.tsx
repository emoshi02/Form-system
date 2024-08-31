import { useState } from 'react';
import classes from './FormHeader.module.scss';
import { FormDataType } from '../../../MainPage/FormItem/FormItem';

export const FormHeader = ({
  id,
  title = 'Untitled Form',
  desc = '',
  user = '',
  onChange,
}: {
  id: string;
  title?: string;
  desc?: string;
  user?: string;
  onChange: (newState: FormDataType) => void;
}) => {
  const [formTitle, setFormTitle] = useState(title);
  const [formDesc, setFormDesc] = useState(desc);
  const [formUser, setFormUser] = useState(user);

  return (
    <section className={classes.formHeader}>
      <input
        type="text"
        value={formTitle}
        className={classes.formTitle}
        id="title"
        data-hook="form-title"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFormTitle(event.target.value);
          onChange({
            id,
            title: event.target.value,
            desc: formDesc,
            user: formUser,
          });
        }}
      />
      <input
        type="text"
        placeholder="Form description"
        className={classes.formDescription}
        id="desc"
        value={formDesc}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFormDesc(event.target.value);
          onChange({
            id,
            title: formTitle,
            desc: event.target.value,
            user: formUser,
          });
        }}
        data-hook="form-description"
      />
      <input
        type="text"
        placeholder="Send to"
        required
        className={classes.userEmail}
        id="user-email"
        value={formUser}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFormUser(event.target.value);
          onChange({
            id,
            title: formTitle,
            desc: formDesc,
            user: event.target.value,
          });
        }}
        data-hook="user-email"
      />
    </section>
  );
};
