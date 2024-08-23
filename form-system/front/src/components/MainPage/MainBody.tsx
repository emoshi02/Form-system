import { useEffect, useState } from 'react';
import { FormItem } from './FormItem/FormItem';
import { useNavigate } from 'react-router-dom';
import './MainPage.scss';

const RECENT_FORMS = [
  {
    id: 'A1B2C3D4',
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
    id: 'E5F6G7H8',
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
    id: 'I9J0K1L2',
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
    id: 'M3N4O5P6',
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
    id: 'Q7R8S9T0',
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
    id: 'U1V2W3X4',
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
    id: 'Y5Z6A7B8',
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
    id: 'C9D0E1F2',
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
    id: 'G3H4I5J6',
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
    id: 'K7L8M9N0',
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
    id: 'Z1A2B3C4',
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
    id: 'D5E6F7G8',
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
    id: 'H9I0J1K2',
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
    id: 'L3M4N5O6',
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
    id: 'P7Q8R9S0',
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
    id: 'T1U2V3W4',
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
    id: 'X5Y6Z7A8',
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
    id: 'B9C0D1E2',
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
    <main className="main-body">
      <section className="forms">
        {forms.map((form, index) => (
          <FormItem
            formData={form}
            onDeleteButtonClick={() => handleDeleteBtnClick(index)}
            key={form.id}
            isAnswerForm={forms === RECEIVED_FORMS}
          />
        ))}
      </section>
      <section className="create-form">
        <button className="create-form-btn" onClick={onBtnClick}>
          <img
            alt="create form"
            className="create-form-img"
            src="../../assets/images/sign.png"
          />
        </button>
      </section>
    </main>
  );
};
