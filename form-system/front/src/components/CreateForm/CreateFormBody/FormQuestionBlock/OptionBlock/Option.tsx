import { useEffect, useState } from 'react';
import classes from './OptionStyle.module.scss';
import { OptionBtn } from './OptionBtn';
import TextareaAutosize from 'react-textarea-autosize';

interface OptProps {
  optionIcon: string;
  type: 'date' | 'text';
  onChange: (value: string[]) => void;
  options: string[];
}

export const Option = ({ optionIcon, type, onChange, options }: OptProps) => {
  const [optionValues, setOptionValues] = useState<string[]>(options);

  useEffect(() => {
    if (type === 'date' && optionValues.length > 1) {
      setOptionValues(['']);
    }
  }, [optionValues.length, type]);

  const handleOptionInputChange = (index: number, newValue: string) => {
    const updatedOptions = [...optionValues];
    updatedOptions[index] = newValue;
    setOptionValues(updatedOptions);
    onChange(updatedOptions);
  };

  const handleDeleteBtnClick = (index: number) => {
    const updatedOptions = optionValues.filter((_, i) => i !== index);
    setOptionValues(updatedOptions);
    onChange(updatedOptions);
  };

  const handleAddOptionBtnClick = () => {
    setOptionValues([...optionValues, '']);
    onChange([...optionValues, '']);
  };

  return (
    <>
      {optionValues.map((option, index) => (
        <span
          className={classes.optionBlock}
          key={index}
          data-hook="option-block"
        >
          <span className={classes.optionWrapper}>
            <span className="material-symbols-outlined">{optionIcon}</span>
            <TextareaAutosize
              className={classes.addOption}
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionInputChange(index, e.target.value)}
              disabled={type === 'date'}
              data-hook="add-option"
            />
          </span>
          {optionValues.length > 1 && (
            <button
              onClick={() => handleDeleteBtnClick(index)}
              className={classes.closeButton}
              data-hook="close-button"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </span>
      ))}
      {type !== 'date' && (
        <OptionBtn
          onAddOption={handleAddOptionBtnClick}
          optionIcon={optionIcon}
        />
      )}
    </>
  );
};
