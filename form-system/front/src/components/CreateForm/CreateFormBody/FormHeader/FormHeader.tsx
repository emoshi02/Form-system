import { useState } from 'react';
import './FormHeader.scss';

export const FormHeader = () => {
  const [title, setTitle] = useState('Untitled Form');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <section className="form-header">
      <input
        type="text"
        value={title}
        className="form-title"
        id="title"
        onChange={handleTitleChange}
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
