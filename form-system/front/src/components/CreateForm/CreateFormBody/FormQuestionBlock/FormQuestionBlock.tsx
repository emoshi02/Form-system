import { useState } from 'react';
import { FormFooter } from '../FormFooter/FormFooter';
import { Question } from './Question';
import { FormDataType } from '../../../MainPage/FormItem/FormItem';

export const FormQuestionBlock = ({
  id,
  title,
  questions = [''],
  optionType = [''],
  image = [null],
  isRequired = [false],
  options = [['']],
  onChange,
}: FormDataType & { onChange: (newState: FormDataType) => void }) => {
  const [questionValues, setQuestionValues] = useState<string[]>(questions);
  const [optionTypeValues, setOptionTypeValues] =
    useState<string[]>(optionType);
  const [imageValues, setImageValues] = useState<(string | null)[]>(image);
  const [requiredValues, setRequiredValues] = useState<boolean[]>(isRequired);
  const [optionValues, setOptionValues] = useState<string[][]>(options);

  const handleAddOptionBtnClick = () => {
    const newQuestions = [...questionValues, ''];
    const newOptionTypes = [...optionTypeValues, 'circle'];
    const newImages = [...imageValues, null];
    const newRequired = [...requiredValues, false];
    const newOptions = [...optionValues, ['']];
    setQuestionValues(newQuestions);
    setOptionTypeValues(newOptionTypes);
    setImageValues(newImages);
    setRequiredValues(newRequired);
    setOptionValues(newOptions);

    onChange({
      id,
      title,
      questions: newQuestions,
      optionType: newOptionTypes,
      image: newImages,
      isRequired: newRequired,
      options: newOptions,
    });
  };

  const handleDeleteBtnClick = (index: number) => {
    const newQuestions = questionValues.filter((_, i) => i !== index);
    const newOptionTypes = optionTypeValues.filter((_, i) => i !== index);
    const newImages = imageValues.filter((_, i) => i !== index);
    const newRequired = requiredValues.filter((_, i) => i !== index);
    const newOptions = optionValues.filter((_, i) => i !== index);
    setQuestionValues(newQuestions);
    setOptionTypeValues(newOptionTypes);
    setImageValues(newImages);
    setRequiredValues(newRequired);
    setOptionValues(newOptions);

    onChange({
      id,
      title,
      questions: newQuestions,
      optionType: newOptionTypes,
      image: newImages,
      isRequired: newRequired,
      options: newOptions,
    });
  };

  const updateFormState = (
    index: number,
    field: string,
    value: string | boolean | null | string[],
  ) => {
    const newQuestions = [...questionValues];
    const newOptionTypes = [...optionTypeValues];
    const newImages = [...imageValues];
    const newRequired = [...requiredValues];
    const newOptions = [...optionValues];

    switch (field) {
      case 'questions':
        newQuestions[index] = value as string;
        setQuestionValues(newQuestions);
        break;
      case 'optionType':
        newOptionTypes[index] = value as string;
        setOptionTypeValues(newOptionTypes);
        break;
      case 'image':
        newImages[index] = value as string | null;
        setImageValues(newImages);
        break;
      case 'isRequired':
        newRequired[index] = value as boolean;
        setRequiredValues(newRequired);
        break;
      case 'options':
        newOptions[index] = value as string[];
        setOptionValues(newOptions);
        break;
      default:
        break;
    }

    onChange({
      id,
      title,
      questions: newQuestions,
      optionType: newOptionTypes,
      image: newImages,
      isRequired: newRequired,
      options: newOptions,
    });
  };

  return (
    <>
      {questionValues.map((title, index: number) => (
        <Question
          id={id}
          title={title}
          index={index}
          optionType={optionType[index]}
          image={image[index]}
          isRequired={isRequired[index]}
          options={options[index]}
          onDeleteBtnClick={handleDeleteBtnClick}
          key={index}
          onChange={updateFormState}
        />
      ))}
      <FormFooter onAddQuestionClick={handleAddOptionBtnClick} />
    </>
  );
};
