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
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Lietuvoje', 'Portugalijoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Portugalijoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Ispanijoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Ispanijoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Ispanijoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Amerikoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['Amerikoje'],
    questionId: '06866040-f145-4c98-92bf-f5d8d8204b36',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '4c1b9453-11e2-4a8d-90a9-24d123786fd3',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '07b6eb3a-ca25-462e-b0f7-4540694e9741',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: 'a184a25d-462d-4cbe-92fa-9e4703e3cee9',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: '624eb5f0-12d1-4760-823e-6e7e36d9ee4d',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['A'],
    questionId: '624eb5f0-12d1-4760-823e-6e7e36d9ee4d',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['B'],
    questionId: '624eb5f0-12d1-4760-823e-6e7e36d9ee4d',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '624eb5f0-12d1-4760-823e-6e7e36d9ee4d',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '7034bd23-afd3-4c98-a903-e180adb3b556',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['C'],
    questionId: '7034bd23-afd3-4c98-a903-e180adb3b556',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '7034bd23-afd3-4c98-a903-e180adb3b556',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '7034bd23-afd3-4c98-a903-e180adb3b556',
    questionName: 'Kurioje salyje gyvenate?',
  },
  {
    answer: ['D'],
    questionId: '33dfc9a9-9dcd-47f5-97d2-e0d71dd3cd8e',
    questionName: 'HAH?',
  },
];

type AnswerType = {
  [answer: string]: number;
};

type GroupedDataType = {
  [questionId: string]: {
    groupedData: AnswerType;
    answerCount: number;
    questionName: string;
  };
};

const processAnswerData = (
  data: { answer: string[]; questionId: string; questionName: string }[],
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
