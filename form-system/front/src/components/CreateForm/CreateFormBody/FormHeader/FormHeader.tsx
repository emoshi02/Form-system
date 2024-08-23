import { useState } from 'react';
import './FormHeader.scss';
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
    <section className="form-header">
      <input
        type="text"
        value={formTitle}
        className="form-title"
        id="title"
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
        className="form-desc"
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
      />
      <input
        type="text"
        placeholder="Send to"
        required
        className="user-email"
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
      />
    </section>
  );
};
