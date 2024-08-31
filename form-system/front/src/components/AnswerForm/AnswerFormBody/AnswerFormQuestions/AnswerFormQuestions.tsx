import { useState } from 'react';
import { OPTIONS } from '../../../CreateForm/CreateFormBody/FormQuestionBlock/constants';
import classes from './AnswerFormQuestions.module.scss';
import classNames from 'classnames';

type AnswerFormQuestionProps = {
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
}: AnswerFormQuestionProps) => {
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
    <section
      className={classes.answerFormQuestion}
      data-hook="answer-form-question"
    >
      <span className={classes.questionWrapper}>
        <h2 className={classes.questionItem}>{title}</h2>
        {isRequired && <p className={classes.required}>{` *`}</p>}
      </span>
      {image && (
        <img
          src={image}
          className={classes.answerFormImage}
          data-hook="answer-form-image"
        />
      )}

      {options.map((option, index) => (
        <label
          className={classes.answerOptionWrapper}
          key={index}
          data-hook="answer-option-wrapper"
        >
          <input
            id={`input-element ${index}`}
            className={classNames(
              classes.answerInputType,
              classes[optionSetting.value],
            )}
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
            data-hook={`answer-input-type ${optionSetting.value}`}
          />
          {option}
        </label>
      ))}
    </section>
  );
};
