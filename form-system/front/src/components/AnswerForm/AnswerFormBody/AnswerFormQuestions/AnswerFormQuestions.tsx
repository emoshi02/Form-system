import { useState } from 'react';
import { OPTIONS } from '../../../CreateForm/CreateFormBody/FormQuestionBlock/constants';
import './AnswerFormQuestions.scss';

type answerFormQstProps = {
  title: string;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
  onChange: (value: string | string[]) => void;
};

export const AnswerFormQuestions = ({
  title,
  optionType,
  image,
  isRequired,
  options,
  onChange,
}: answerFormQstProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const optionSetting =
    OPTIONS.find((option) => option.optionIcon === optionType) || OPTIONS[0];

  const handleCheckboxChange = (option: string) => {
    const updatedSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions);
  };

  const handleSingleOptionChange = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
    onChange(dateValue);
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
            value={
              optionSetting.value === 'date' ? selectedDate || '' : undefined
            }
            onChange={
              optionSetting.value === 'checkbox'
                ? () => handleCheckboxChange(option)
                : optionSetting.value === 'radio'
                  ? () => handleSingleOptionChange(option)
                  : handleDateChange
            }
          />
          <p>{option}</p>
        </div>
      ))}
    </section>
  );
};
