import { useState } from 'react';
import { FormFooter } from '../FormFooter/FormFooter';
import { Question } from './Question';

interface QstProps {
  questions?: string[];
}

export const FormQuestionBlock = ({ questions = [''] }: QstProps) => {
  const [questionValues, setQuestionValues] = useState<string[]>(questions);

  const handleAddOptionBtnClick = () => {
    setQuestionValues([...questionValues, '']);
  };

  const handleDeleteBtnClick = (index: number) => {
    setQuestionValues(questionValues.filter((_, i) => i !== index));
  };

  return (
    <>
      {questionValues.map((_, index: number) => (
        <Question
          index={index}
          onDeleteBtnClick={handleDeleteBtnClick}
          key={index}
        />
      ))}
      <FormFooter onAddQuestionClick={handleAddOptionBtnClick} />
    </>
  );
};
