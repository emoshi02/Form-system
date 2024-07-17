import { Toggle } from '../../../ToggleSwitch/Toggle';
import { OPTIONS } from './constants';
import { OptionSelect } from './optionSelect/optionSelect';
import { Option } from './OptionBlock/Option';
import { useState } from 'react';
import './Question.scss';

type QuestionProps = {
  title: string;
  index: number;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
  onDeleteBtnClick: (index: number) => void;
};

export const Question = ({
  title,
  index,
  optionType,
  image,
  isRequired,
  options,
  onDeleteBtnClick,
}: QuestionProps) => {
  const initialOptionSetting =
    OPTIONS.find((option) => option.optionIcon === optionType) || OPTIONS[0];
  const [optionSettingSelect, setOptionSettingSelect] =
    useState(initialOptionSetting);
  const [questionTitle, setQuestionTitle] = useState(title);

  const [imagePreview, setImagePreview] = useState<string | null>(image);

  const [isQuestionRequired, setIsQuestionRequired] =
    useState<boolean>(isRequired);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleOptionChange = (option: (typeof OPTIONS)[0]) => {
    setOptionSettingSelect(option);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      event.target.value = '';
    }
  };

  const handleImageIconClick = () => {
    const fileInput = document.getElementById(`image-input ${index}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (confirm('Are you sure you want to remove this image?')) {
      setImagePreview(null);
    }
  };

  const handleToggleChange = (required: boolean) => {
    setIsQuestionRequired(required);
  };

  return (
    <form className="question" onSubmit={handleSubmit}>
      <span className="input-setting-wrapper">
        <input
          type="text"
          placeholder={`Question ${index + 1}`}
          className="question-input"
          value={questionTitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setQuestionTitle(event.target.value);
          }}
        />
        <span
          className="material-symbols-outlined question-image"
          onClick={handleImageIconClick}
        >
          image
        </span>
        <input
          type="file"
          id={`image-input ${index}`}
          accept="image/png, image/jpeg"
          className="image-input"
          onChange={handleImageChange}
        />
        <OptionSelect
          options={OPTIONS}
          selectedOption={optionSettingSelect}
          onChange={(option) => handleOptionChange(option)}
        />
      </span>
      <div className="image-wrapper" onClick={handleImageClick}>
        {imagePreview && (
          <img
            src={imagePreview}
            alt={`Selected ${index}`}
            className="question-image-preview"
            onClick={handleImageClick}
          />
        )}
      </div>
      <span className="option-control">
        <Option
          optionIcon={optionSettingSelect.optionIcon}
          type={optionSettingSelect.type}
          options={options}
        />
      </span>
      <span className="question-footer">
        <span
          className="material-symbols-outlined question-delete-btn"
          onClick={() => onDeleteBtnClick(index)}
        >
          delete
        </span>
        <Toggle
          label="Required"
          isRequired={isQuestionRequired}
          setRequired={handleToggleChange}
        />
      </span>
    </form>
  );
};
