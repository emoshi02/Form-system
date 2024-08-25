import { useState } from 'react';
import { FormFooter } from '../FormFooter/FormFooter';
import { Question } from './Question';
import { FormDataType } from '../../../MainPage/FormItem/FormItem';
import { v4 as uuid } from 'uuid';

export type QuestionFieldProps =
  | 'questions'
  | 'optionType'
  | 'image'
  | 'isRequired'
  | 'options';

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
  const [questionIds, setQuestionIds] = useState([uuid()]);
  const [questionValues, setQuestionValues] = useState<string[]>(questions);
  const [optionTypeValues, setOptionTypeValues] =
    useState<string[]>(optionType);
  const [imageValues, setImageValues] = useState<(string | null)[]>(image);
  const [requiredValues, setRequiredValues] = useState<boolean[]>(isRequired);
  const [optionValues, setOptionValues] = useState<string[][]>(options);

  const handleAddQuestionBtnClick = () => {
    const newId = uuid();
    const newQuestions = [...questionValues, ''];
    const newOptionTypes = [...optionTypeValues, 'circle'];
    const newImages = [...imageValues, null];
    const newRequired = [...requiredValues, false];
    const newOptions = [...optionValues, ['']];
    const newIds = [...questionIds, newId];

    setQuestionIds(newIds);
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
    const newIds = questionIds.filter((_, i) => i !== index);

    setQuestionIds(newIds);
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
    field: QuestionFieldProps,
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
      /*istanbul ignore next*/
      default:
        throw new Error('Unrecognized field type');
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
          key={questionIds[index]}
          id={questionIds[index]}
          title={title}
          index={index}
          optionType={optionTypeValues[index]}
          image={imageValues[index]}
          isRequired={requiredValues[index]}
          options={optionValues[index]}
          onDeleteBtnClick={() => handleDeleteBtnClick(index)}
          onChange={updateFormState}
        />
      ))}
      <FormFooter onAddQuestionClick={handleAddQuestionBtnClick} />
    </>
  );
};
