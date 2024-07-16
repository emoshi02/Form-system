import { useState } from 'react';
import './OptionStyle.scss';
import { OptionBtn } from './OptionBtn';

interface OptProps {
  optionIcon: string;
  type: string;
  options?: string[];
}

export const Option = ({ optionIcon, type, options = [''] }: OptProps) => {
  const [optionValues, setOptionValues] = useState<string[]>(options);

  const handleOptionInputChange = (index: number, newValue: string) => {
    const updatedOptions = [...optionValues];
    updatedOptions[index] = newValue;
    setOptionValues(updatedOptions);
  };

  const handleDeleteBtnClick = (index: number) => {
    const updatedOptions = optionValues.filter((_, i) => i != index);
    setOptionValues(updatedOptions);
  };

  const handleAddOptionBtnClick = () => {
    setOptionValues([...optionValues, '']);
  };

  return (
    <>
      {optionValues.map((opt, index) => (
        <span className="option-block" key={index}>
          <span className="option-wrapper">
            <span className="material-symbols-outlined">{optionIcon}</span>
            <input
              type={type}
              className="add-option"
              placeholder={`Option ${index + 1}`}
              value={opt ?? ''}
              onChange={(e) => handleOptionInputChange(index, e.target.value)}
            />
          </span>
          <button onClick={() => handleDeleteBtnClick(index)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </span>
      ))}
      <OptionBtn
        onAddOption={handleAddOptionBtnClick}
        optionIcon={optionIcon}
      />
    </>
  );
};
