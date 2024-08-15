import './SubmitButton.scss';
import { useNavigate } from 'react-router-dom';

export const SubmitButton = ({ value }: { value: string }) => {
  const navigate = useNavigate();

  return (
    <button type="submit" className="btn" onClick={() => navigate('/main')}>
      {value}
    </button>
  );
};
