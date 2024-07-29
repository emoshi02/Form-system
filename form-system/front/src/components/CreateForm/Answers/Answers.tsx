import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';
import './Answers.scss';

const DATA = [
  {
    answer: ['Lietuvoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Lietuvoje', 'Portugalijoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Portugalijoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Ispanijoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Ispanijoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Ispanijoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Amerikoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Amerikoje'],
    questionId: 1,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 2,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 3,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 4,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 5,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 5,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: 5,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 5,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 50,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 50,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 50,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 50,
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 77,
    questionName: 'HAH?',
  },
];

type AnswerType = {
  [answer: string]: number;
};

type GroupedDataType = {
  [questionId: number]: {
    groupedData: AnswerType;
    answerCount: number;
    questionName: string;
  };
};

const processAnswerData = (
  data: { answer: string[]; questionId: number; questionName: string }[],
) => {
  const groupedData: GroupedDataType = {};

  data.forEach((entry) => {
    const questionId = entry.questionId;
    const questionName = entry.questionName;
    entry.answer.forEach((answer) => {
      if (!groupedData[questionId]) {
        groupedData[questionId] = {
          questionName: questionName,
          groupedData: {},
          answerCount: 0,
        };
      }

      if (!groupedData[questionId].groupedData[answer]) {
        groupedData[questionId].groupedData[answer] = 0;
      }

      groupedData[questionId].groupedData[answer]++;
    });
    groupedData[questionId].answerCount++;
  });
  return groupedData;
};

export const Answers = () => {
  if (!DATA) {
    return (
      <section className="form-header">
        <h1 className="answers" id="answers">
          {`0 Answers`}
        </h1>
      </section>
    );
  }

  const processedData = processAnswerData(DATA);

  return (
    <>
      <section className="form-header">
        <h1 className="answers" id="answers">
          {`${Object.keys(processedData).length} Answers`}
        </h1>
      </section>
      {Object.values(processedData).map((questionData) => {
        return (
          <section className="form-answer">
            <h2 className="form-question">{questionData.questionName}</h2>
            <p className="answer-number">{`${questionData.answerCount} Answers`}</p>
            <ResponsiveContainer height={300}>
              <BarChart
                width={500}
                height={500}
                data={Object.entries(questionData.groupedData).map(
                  ([answer, count]) => ({
                    answer,
                    'Number of Votes': count,
                  }),
                )}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <XAxis dataKey="answer" />
                <YAxis />
                <Bar
                  className="bar"
                  dataKey="Number of Votes"
                  activeBar={<Rectangle className="rectangle" />}
                  fill="#673ab7"
                />
              </BarChart>
            </ResponsiveContainer>
          </section>
        );
      })}
    </>
  );
};
