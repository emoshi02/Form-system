import { useState } from 'react';
import { FormFooter } from '../FormFooter/FormFooter';
import { Question } from './Question';
import { FormDataType } from '../../../MainPage/FormItem/FormItem';
import { v4 as uuid } from 'uuid';

export type QuestionFieldProps =
  | 'question'
  | 'optionType'
  | 'image'
  | 'isRequired'
  | 'options';

type QuestionType = {
  question: string;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
};

export const FormQuestionBlock = ({
  id,
  title,
  questions = [''],
  optionType = ['circle'],
  image = [null],
  isRequired = [false],
  options = [['']],
  onChange,
}: FormDataType & { onChange: (newState: FormDataType) => void }) => {
  const getInitialQuestionData = () => {
    const initialId = uuid();

    return {
      [initialId]: {
        question: questions[0],
        optionType: optionType[0],
        image: image[0],
        isRequired: isRequired[0],
        options: options[0],
      },
    };
  };

  const [questionData, setQuestionData] = useState<
    Record<string, QuestionType>
  >(getInitialQuestionData);

  const handleOnChange = (newData: Record<string, QuestionType>) => {
    onChange({
      id,
      title,
      questions: Object.values(newData).map((data) => data.question),
      optionType: Object.values(newData).map((data) => data.optionType),
      image: Object.values(newData).map((data) => data.image),
      isRequired: Object.values(newData).map((data) => data.isRequired),
      options: Object.values(newData).map((data) => data.options),
    });
  };

  const handleAddQuestionBtnClick = () => {
    const newId = uuid();

    const newQuestionData = {
      ...questionData,
      [newId]: {
        question: '',
        optionType: 'circle',
        image: null,
        isRequired: false,
        options: [''],
      },
    };

    setQuestionData(newQuestionData);

    handleOnChange(newQuestionData);
  };

  const handleDeleteBtnClick = (questionId: string) => {
    const newQuestionData = { ...questionData };
    delete newQuestionData[questionId];
    setQuestionData(newQuestionData);
    handleOnChange(newQuestionData);
  };

  const updateFormState = (
    questionId: string,
    field: QuestionFieldProps,
    value: string | boolean | null | string[],
  ) => {
    const newQuestionData = {
      ...questionData,
      [questionId]: {
        ...questionData[questionId],
        [field]: value,
      },
    };
    setQuestionData(newQuestionData);
    handleOnChange(newQuestionData);
  };

  return (
    <>
      {Object.entries(questionData).map(
        ([questionId, questionValues], index) => {
          const { question, optionType, image, isRequired, options } =
            questionValues;
          return (
            <Question
              key={questionId}
              id={questionId}
              title={question}
              index={index}
              optionType={optionType}
              image={image}
              isRequired={isRequired}
              options={options}
              onDeleteBtnClick={() => handleDeleteBtnClick(questionId)}
              onChange={updateFormState}
            />
          );
        },
      )}
      <FormFooter onAddQuestionClick={handleAddQuestionBtnClick} />
    </>
  );
};
