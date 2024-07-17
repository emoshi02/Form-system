import { useState } from 'react';
import './FormHeader.scss';

export const FormHeader = ({
  title = 'Untitled Form',
  desc = '',
  user = '',
}: {
  title: string | undefined;
  desc: string | undefined;
  user: string | undefined;
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
        }}
      />
      <input
        type="text"
        placeholder="Send to"
        required
        id="user-email"
        value={formUser}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFormUser(event.target.value);
        }}
      />
    </section>
  );
};
