import { useEffect, useState } from 'react';
import { FormItem } from './FormItem/FormItem';
import { useNavigate } from 'react-router-dom';
import classes from './MainBody.module.scss';

const RECENT_FORMS = [
  {
    id: '0e5e89ae-fe42-407c-8ab5-7850ca60d719',
    title: 'Test form',
    desc: 'This is a test form',
    user: 'test@gmail.com',
    questions: [
      'In what ways does the implementation of comprehensive testing methodologies, including unit testing, integration testing, system testing, and user acceptance testing, contribute to the overall success of a software development project by ensuring functionality, reliability, security, and user satisfaction, while also mitigating potential risks, reducing long-term costs, and enhancing the quality of the final product in an increasingly competitive and fast-paced technological environment?',
    ],
    optionType: ['check_box_outline_blank'],
    image: [null],
    isRequired: [false],
    options: [
      [
        'In a world filled with countless opportunities and experiences, the concept of a "test" often stands as a pivotal point of growth, understanding, and discovery. The term "test" might initially conjure images of academic exams, professional certifications, or skill assessments, but its scope and impact reach far beyond these traditional boundaries. When we delve deeper into the essence of what a test truly represents, we uncover layers of significance that elevate it to an almost sublime level of importance.',
        'The journey of testing reveals our true potential, pushing us to grow, learn, and achieve greatness.',
      ],
    ],
  },
  {
    id: 'd331b7cd-9db2-44cb-9824-da2966715b3d',
    title: 'AAA',
    desc: 'New form about cats',
    user: 'richard@gmail.com',
    questions: ['Do you have a cat?', 'Would you like to have a cat?'],
    optionType: ['circle', 'check_box_outline_blank'],
    image: [null, null],
    isRequired: [true, false],
    options: [
      ['Yes', 'No'],
      ['No', 'Yes'],
    ],
  },
  {
    id: '537d98b8-eba0-4ca8-91e8-3aec3e1ad97d',
    title: 'BBB',
    desc: 'Survey on travel preferences',
    user: 'emily@gmail.com',
    questions: ['Do you like to travel?', 'What is your favorite destination?'],
    optionType: ['check_box_outline_blank', 'circle'],
    image: [null, null],
    isRequired: [true, true],
    options: [
      ['Yes', 'No'],
      ['Beach', 'Mountains', 'City', 'Countryside'],
    ],
  },
  {
    id: '0a3e7b62-0af1-4e7f-b6c1-66ba62105715',
    title: 'CCC',
    desc: 'Feedback form for new product',
    user: 'john@gmail.com',
    questions: [
      'How do you rate our product?',
      'Would you recommend it to others?',
    ],
    optionType: ['circle', 'circle'],
    image: [null, null],
    isRequired: [true, false],
    options: [
      ['1', '2', '3', '4', '5'],
      ['Yes', 'No'],
    ],
  },
  {
    id: '8b0852b8-87b6-4f13-b7f9-93ec237dffce',
    title: 'DDD',
    desc: 'Employee satisfaction survey',
    user: 'sarah@gmail.com',
    questions: ['Are you satisfied with your job?', 'What could be improved?'],
    optionType: ['event', 'event'],
    image: [null, null],
    isRequired: [true, false],
    options: [[''], ['']],
  },
  {
    id: '6c34c414-b2c6-4b70-b446-8bf4edc4115d',
    title: 'EEE',
    desc: 'Event feedback form',
    user: 'alex@gmail.com',
    questions: ['Did you enjoy the event?', 'Would you attend again?'],
    optionType: ['circle', 'circle'],
    image: ['event.jpg', null],
    isRequired: [true, true],
    options: [
      ['Yes', 'No'],
      ['Yes', 'No'],
    ],
  },
  {
    id: 'a3154ac3-fa97-4143-950b-84c6255bd8e1',
    title: 'FFF',
    desc: 'Market research survey',
    user: 'david@gmail.com',
    questions: ['Do you shop online?', 'Which online stores do you prefer?'],
    optionType: ['circle', 'event'],
    image: [null, null],
    isRequired: [true, false],
    options: [['Yes', 'No'], ['']],
  },
  {
    id: '39d1bd9e-b990-4a6f-bcb4-0df1b981441f',
    title: 'GGG',
    desc: 'Fitness habits questionnaire',
    user: 'lisa@gmail.com',
    questions: [
      'Do you exercise regularly?',
      'What is your preferred type of exercise?',
    ],
    optionType: ['check_box_outline_blank', 'event'],
    image: [null, 'fitness.jpg'],
    isRequired: [true, false],
    options: [['Yes', 'No'], ['']],
  },
  {
    id: 'baec79f4-c983-4a46-b748-bc1e2eba461a',
    title: 'HHH',
    desc: 'Customer service evaluation',
    user: 'mike@gmail.com',
    questions: [
      'How was your experience with our customer service?',
      'Any suggestions for improvement?',
    ],
    optionType: ['check_box_outline_blank', 'check_box_outline_blank'],
    image: [null, null],
    isRequired: [true, false],
    options: [
      ['1', '2', '3', '4', '5'],
      ['Response time', 'Politeness', 'Knowledge', 'Resolution'],
    ],
  },
  {
    id: '8fa60318-7a0f-445d-9a1a-8d9ed28003c8',
    title: 'III',
    desc: 'Website usability survey',
    user: 'anna@gmail.com',
    questions: [
      'Is our website easy to navigate?',
      'What features would you like to see?',
    ],
    optionType: ['check_box_outline_blank', 'circle'],
    image: [null, null],
    isRequired: [true, false],
    options: [
      ['Yes', 'No'],
      [
        'Search functionality',
        'Better layout',
        'More content',
        'Faster loading times',
      ],
    ],
  },
];

const RECEIVED_FORMS = [
  {
    id: '752e1b89-d8fa-4eff-bff6-6e0dd2acefa3',
    title: 'Received Test form',
    desc: 'This is a test form',
    user: 'test@gmail.com',
    questions: [
      'In what ways does the implementation of comprehensive testing methodologies, including unit testing, integration testing, system testing, and user acceptance testing, contribute to the overall success of a software development project by ensuring functionality, reliability, security, and user satisfaction, while also mitigating potential risks, reducing long-term costs, and enhancing the quality of the final product in an increasingly competitive and fast-paced technological environment?',
    ],
    optionType: ['check_box_outline_blank'],
    image: [null],
    isRequired: [false],
    options: [
      [
        'In a world filled with countless opportunities and experiences, the concept of a "test" often stands as a pivotal point of growth, understanding, and discovery. The term "test" might initially conjure images of academic exams, professional certifications, or skill assessments, but its scope and impact reach far beyond these traditional boundaries. When we delve deeper into the essence of what a test truly represents, we uncover layers of significance that elevate it to an almost sublime level of importance.',
        'The journey of testing reveals our true potential, pushing us to grow, learn, and achieve greatness.',
      ],
    ],
  },
  {
    id: '22dd27bd-e67d-410e-8751-578cddaa477c',
    title: 'Travel Preferences',
    desc: 'Survey on travel preferences',
    user: 'emily@gmail.com',
    questions: ['Do you like to travel?', 'What is your favorite destination?'],
    optionType: ['check_box_outline_blank', 'circle'],
    image: [null, null],
    isRequired: [true, true],
    options: [
      ['Yes', 'No'],
      ['Beach', 'Mountains', 'City', 'Countryside'],
    ],
  },
  {
    id: '73d7ef8c-2c1b-4fde-8421-04556218ce6c',
    title: 'Satisfaction',
    desc: 'Employee satisfaction survey',
    user: 'sarah@gmail.com',
    questions: ['Are you satisfied with your job?', 'What could be improved?'],
    optionType: ['event', 'event'],
    image: [null, null],
    isRequired: [true, false],
    options: [[''], ['']],
  },
  {
    id: '07365428-ec7f-47ef-8731-6ffe307e97a6',
    title: 'Feedback',
    desc: 'Event feedback form',
    user: 'alex@gmail.com',
    questions: ['Did you enjoy the event?', 'Would you attend again?'],
    optionType: ['circle', 'circle'],
    image: ['event.jpg', null],
    isRequired: [true, true],
    options: [
      ['Yes', 'No'],
      ['Yes', 'No'],
    ],
  },
  {
    id: 'b5ea7bcf-d027-4c83-8661-016183e72699',
    title: 'Research',
    desc: 'Market research survey',
    user: 'david@gmail.com',
    questions: ['Do you shop online?', 'Which online stores do you prefer?'],
    optionType: ['circle', 'event'],
    image: [null, null],
    isRequired: [true, false],
    options: [['Yes', 'No'], ['']],
  },
  {
    id: 'b8513bbc-ed69-4f6b-b889-d4fdd042a477',
    title: 'Fitness Habits',
    desc: 'Fitness habits questionnaire',
    user: 'lisa@gmail.com',
    questions: [
      'Do you exercise regularly?',
      'What is your preferred type of exercise?',
    ],
    optionType: ['check_box_outline_blank', 'event'],
    image: [null, 'fitness.jpg'],
    isRequired: [true, false],
    options: [['Yes', 'No'], ['']],
  },
  {
    id: '08058bb0-4fa1-4bc4-90a0-144af291eea3',
    title: 'Customer service',
    desc: 'Customer service evaluation',
    user: 'mike@gmail.com',
    questions: [
      'How was your experience with our customer service?',
      'Any suggestions for improvement?',
    ],
    optionType: ['check_box_outline_blank', 'check_box_outline_blank'],
    image: [null, null],
    isRequired: [true, false],
    options: [
      ['1', '2', '3', '4', '5'],
      ['Response time', 'Politeness', 'Knowledge', 'Resolution'],
    ],
  },
  {
    id: '3b779c70-7f35-42f4-92ce-aeba07670d5e',
    title: 'Website usability',
    desc: 'Website usability survey',
    user: 'anna@gmail.com',
    questions: [
      'Is our website easy to navigate?',
      'What features would you like to see?',
    ],
    optionType: ['check_box_outline_blank', 'circle'],
    image: [null, null],
    isRequired: [true, false],
    options: [
      ['Yes', 'No'],
      [
        'Search functionality',
        'Better layout',
        'More content',
        'Faster loading times',
      ],
    ],
  },
];

export const MainBody = ({
  activeSectionIndex,
}: {
  activeSectionIndex: number;
}) => {
  const navigate = useNavigate();

  const [forms, setForms] = useState(
    activeSectionIndex === 0 ? RECENT_FORMS : RECEIVED_FORMS,
  );

  useEffect(() => {
    setForms(activeSectionIndex === 0 ? RECENT_FORMS : RECEIVED_FORMS);
  }, [activeSectionIndex]);

  const onBtnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/createForm');
  };

  const handleDeleteBtnClick = (index: number) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
  };

  return (
    <main className={classes.mainBody}>
      <section className={classes.forms}>
        {forms.map((form, index) => (
          <FormItem
            formData={form}
            onDeleteButtonClick={() => handleDeleteBtnClick(index)}
            key={form.id}
            isAnswerForm={forms === RECEIVED_FORMS}
          />
        ))}
      </section>
      <section className={classes.createForm}>
        <button
          className={classes.createFormButton}
          onClick={onBtnClick}
          data-hook="create-form-button"
        >
          <img
            alt="create form"
            className={classes.createFormImage}
            src="../../assets/images/sign.png"
          />
        </button>
      </section>
    </main>
  );
};
