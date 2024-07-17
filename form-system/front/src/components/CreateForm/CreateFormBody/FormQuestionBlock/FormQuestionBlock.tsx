import { useState } from 'react';
import { FormFooter } from '../FormFooter/FormFooter';
import { Question } from './Question';
import { FormDataType } from '../../../MainPage/FormItem/FormItem';

export const FormQuestionBlock = ({
  questions = [''],
  optionType = [''],
  image = [null],
  isRequired = [false],
  options = [['']],
}: Partial<FormDataType>) => {
  const [questionValues, setQuestionValues] = useState<string[]>(questions);

  const handleAddOptionBtnClick = () => {
    setQuestionValues([...questionValues, '']);
  };

  const handleDeleteBtnClick = (index: number) => {
    setQuestionValues(questionValues.filter((_, i) => i !== index));
  };

  return (
    <>
      {questionValues.map((title, index: number) => (
        <Question
          title={title}
          index={index}
          optionType={optionType[index]}
          image={image[index]}
          isRequired={isRequired[index]}
          options={options[index]}
          onDeleteBtnClick={handleDeleteBtnClick}
          key={index}
        />
      ))}
      <FormFooter onAddQuestionClick={handleAddOptionBtnClick} />
    </>
  );
};
