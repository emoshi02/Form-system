import { useState } from 'react';
import { OPTIONS } from '../../../CreateForm/CreateFormBody/FormQuestionBlock/constants';
import './AnswerFormQuestions.scss';

type answerFormQstProps = {
  title: string;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
};

export const AnswerFormQuestions = ({
  title,
  optionType,
  image,
  isRequired,
  options,
}: answerFormQstProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const optionSetting =
    OPTIONS.find((option) => option.optionIcon === optionType) || OPTIONS[0];

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleSingleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <section className="answer-form-question">
      <span className="question-wrapper">
        <h2 className="question-item">{title}</h2>
        {isRequired && <p className="required">{` *`}</p>}
      </span>
      {image && <img src={image} className="answer-form-image" />}
      {options.map((option, index) => (
        <div className="option-wrapper" key={index}>
          <input
            className={`answer-input-type ${optionSetting.value}`}
            type={optionSetting.value}
            required={isRequired}
            checked={
              optionSetting.value === 'checkbox'
                ? selectedOptions.includes(option)
                : selectedOption === option
            }
            onChange={() =>
              optionSetting.value === 'checkbox'
                ? handleCheckboxChange(option)
                : handleSingleOptionChange(option)
            }
          />
          <p>{option}</p>
        </div>
      ))}
    </section>
  );
};
