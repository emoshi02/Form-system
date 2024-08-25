import classes from './SubmitButton.module.scss';
import { useNavigate } from 'react-router-dom';

export const SubmitButton = ({ value }: { value: string }) => {
  const navigate = useNavigate();

  return (
    <button
      type="submit"
      className={classes.button}
      onClick={() => navigate('/main')}
    >
      {value}
    </button>
  );
};
