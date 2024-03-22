import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/description/Description';
import Feedback from './components/feedback/Feedback';
import Options from './components/options/Options';
import Notification from './components/notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('values');
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveInterest = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  const updateFeedback = e => {
    setValues({
      ...values,
      [e.target.name]: values[e.target.name] + 1,
    });
  };

  const onClickReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onClick={updateFeedback}
        total={totalFeedback}
        onClickReset={onClickReset}
      />
      {totalFeedback ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positiveInterest}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
