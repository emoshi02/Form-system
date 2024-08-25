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
import classes from './Answers.module.scss';

const CONTAINER_HEIGHT = 300;
const CHART_SIZE = 500;
const BAR_FILL_COLOR = '#673ab7';

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
/*istanbul ignore next*/
export const Answers = () => {
  if (!DATA) {
    return (
      <section className={classes.formHeader}>
        <h1 className={classes.answers} id="answers">
          {`0 Answers`}
        </h1>
      </section>
    );
  }

  const processedData = processAnswerData(DATA);

  return (
    <>
      <section className={classes.formHeader}>
        <h1 className={classes.answers} id="answers" data-hook="answers">
          {`${Object.keys(processedData).length} Answers`}
        </h1>
      </section>
      {Object.values(processedData).map((questionData, index) => {
        return (
          <section className={classes.formAnswer} key={index}>
            <h2 className={classes.formQuestion}>
              {questionData.questionName}
            </h2>
            <p
              className={classes.answerNumber}
            >{`${questionData.answerCount} Answers`}</p>
            <ResponsiveContainer height={CONTAINER_HEIGHT}>
              <BarChart
                width={CHART_SIZE}
                height={CHART_SIZE}
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
                  className={classes.bar}
                  dataKey="Number of Votes"
                  activeBar={<Rectangle className={classes.rectangle} />}
                  fill={BAR_FILL_COLOR}
                />
              </BarChart>
            </ResponsiveContainer>
          </section>
        );
      })}
    </>
  );
};
