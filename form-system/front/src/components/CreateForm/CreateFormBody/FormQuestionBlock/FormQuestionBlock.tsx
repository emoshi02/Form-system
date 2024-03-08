import './FormQuestionBlock.scss';
import { Option } from './OptionBlock/Option';
import { OptionBtn } from './OptionBlock/OptionBtn';

export const FormQuestionBlock = ({ qst }: { qst: number }) => {
  return (
    <form className="question">
      <input type="text" placeholder={`Question ${qst}`} />
      <span className="option-control">
        <Option opt={1} />
        <OptionBtn />
      </span>
    </form>
  );
};
