import { FormDataType } from '../../MainPage/FormItem/FormItem';
import { AnswerFormQuestions } from './AnswerFormQuestions/AnswerFormQuestions';

export const AnswerFormBody = ({
  questions = [''],
  optionType = [''],
  image = [null],
  isRequired = [false],
  options = [['']],
}: Partial<FormDataType>) => {
  return questions.map((title: string, index: number) => (
    <AnswerFormQuestions
      title={title}
      optionType={optionType[index]}
      image={image[index]}
      isRequired={isRequired[index]}
      options={options[index]}
      key={index}
    />
  ));
};
