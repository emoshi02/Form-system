import { Toggle } from '../../../ToggleSwitch/Toggle';
import { OPTIONS, REMOVE_IMAGE_TEXT } from './constants';
import { OptionSelect } from './optionSelect/optionSelect';
import { Option } from './OptionBlock/Option';
import { useRef, useState } from 'react';
import classes from './Question.module.scss';
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
  onDeleteBtnClick: (questionId: string) => void;
  onChange: (
    questionId: string,
    field: QuestionFieldProps,
    value: boolean | string | null | string[],
  ) => void;
};

export const Question = ({
  id,
  title,
  index,
  optionType,
  image,
  isRequired,
  options,
  onDeleteBtnClick,
  onChange,
}: QuestionProps) => {
  const initialOptionSetting = OPTIONS.find(
    (option) => option.optionIcon === optionType,
  );

  const [optionSettingSelect, setOptionSettingSelect] = useState(
    initialOptionSetting!,
  );
  const [questionTitle, setQuestionTitle] = useState(title);

  const [imagePreview, setImagePreview] = useState<string | null>(image);

  const [isQuestionRequired, setIsQuestionRequired] =
    useState<boolean>(isRequired);

  const imageIconRef = useRef<HTMLInputElement>(null);

  const handleOptionChange = (option: (typeof OPTIONS)[0]) => {
    setOptionSettingSelect(option);
    onChange(id, 'optionType', option.optionIcon);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      event.target.value = '';
      onChange(id, 'image', objectUrl);
    }
  };

  const handleImageIconClick = () => {
    imageIconRef.current?.click();
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (confirm(REMOVE_IMAGE_TEXT)) {
      setImagePreview(null);
      onChange(id, 'image', null);
    }
  };

  const handleToggleChange = (required: boolean) => {
    setIsQuestionRequired(required);
    onChange(id, 'isRequired', required);
  };

  const handleOptionLengthChanges = (newOptions: string[]) => {
    onChange(id, 'options', newOptions);
  };

  return (
    <section className={classes.question}>
      <span className={classes.inputSettingWrapper}>
        <TextareaAutosize
          placeholder={`Question ${index + 1}`}
          className={classes.questionInput}
          value={questionTitle}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setQuestionTitle(event.target.value);
            onChange(id, 'question', event.target.value);
          }}
          data-hook="question-input"
        />
        <span
          className={`material-symbols-outlined ${classes.questionImage}`}
          onClick={handleImageIconClick}
          data-hook="question-image"
        >
          image
        </span>
        <input
          type="file"
          id={`image-input ${id}`}
          ref={imageIconRef}
          accept="image/png, image/jpeg"
          className={classes.imageInput}
          onChange={handleImageChange}
          data-hook="image-input"
        />
        <OptionSelect
          options={OPTIONS}
          selectedOption={optionSettingSelect}
          onChange={(option) => handleOptionChange(option)}
        />
      </span>
      <div
        className={classes.imageWrapper}
        onClick={handleImageClick}
        data-hook="image-wrapper"
      >
        {imagePreview && (
          <img
            src={imagePreview}
            alt={`Selected ${index}`}
            className={classes.questionImagePreview}
            onClick={handleImageClick}
            data-hook="question-image-preview"
          />
        )}
      </div>
      <span className={classes.optionControl}>
        <Option
          optionIcon={optionSettingSelect.optionIcon}
          type={optionSettingSelect.type}
          options={options}
          onChange={handleOptionLengthChanges}
        />
      </span>
      <span className={classes.questionFooter}>
        <span
          className={`material-symbols-outlined ${classes.questionDeleteButton}`}
          onClick={() => onDeleteBtnClick(id)}
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
