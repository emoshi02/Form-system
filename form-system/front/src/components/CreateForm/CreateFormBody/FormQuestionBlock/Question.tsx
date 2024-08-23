import { Toggle } from '../../../ToggleSwitch/Toggle';
import { OPTIONS, REMOVE_IMAGE_TEXT } from './constants';
import { OptionSelect } from './optionSelect/optionSelect';
import { Option } from './OptionBlock/Option';
import { useRef, useState } from 'react';
import './Question.scss';
import { QuestionFieldProps } from './FormQuestionBlock';
import TextareaAutosize from 'react-textarea-autosize';

type QuestionProps = {
  id: string;
  title: string;
  index: number;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
  onDeleteBtnClick: (index: number) => void;
  onChange: (
    index: number,
    field: QuestionFieldProps,
    value: boolean | string | null | string[],
  ) => void;
};

export const Question = ({
  title,
  index,
  optionType,
  image,
  isRequired,
  options,
  onDeleteBtnClick,
  onChange,
}: QuestionProps) => {
  const initialOptionSetting =
    OPTIONS.find((option) => option.optionIcon === optionType) || OPTIONS[0];

  const [optionSettingSelect, setOptionSettingSelect] =
    useState(initialOptionSetting);
  const [questionTitle, setQuestionTitle] = useState(title);

  const [imagePreview, setImagePreview] = useState<string | null>(image);

  const [isQuestionRequired, setIsQuestionRequired] =
    useState<boolean>(isRequired);

  const imageIconRef = useRef<HTMLInputElement>(null);

  const handleOptionChange = (option: (typeof OPTIONS)[0]) => {
    setOptionSettingSelect(option);
    onChange(index, 'optionType', option.optionIcon);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      event.target.value = '';
      onChange(index, 'image', objectUrl);
    }
  };

  const handleImageIconClick = () => {
    imageIconRef.current?.click();
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (confirm(REMOVE_IMAGE_TEXT)) {
      setImagePreview(null);
      onChange(index, 'image', null);
    }
  };

  const handleToggleChange = (required: boolean) => {
    setIsQuestionRequired(required);
    onChange(index, 'isRequired', required);
  };

  const handleOptionLengthChanges = (newOptions: string[]) => {
    onChange(index, 'options', newOptions);
  };

  return (
    <section className="question">
      <span className="input-setting-wrapper">
        <TextareaAutosize
          placeholder={`Question ${index + 1}`}
          className="question-input"
          value={questionTitle}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setQuestionTitle(event.target.value);
            onChange(index, 'questions', event.target.value);
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
          ref={imageIconRef}
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
          onChange={handleOptionLengthChanges}
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
    </section>
  );
};
