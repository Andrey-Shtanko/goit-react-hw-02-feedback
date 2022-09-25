import { Feedback, Total, Percentage } from './Statistics.styled';

export const Statictics = ({
  feedbacks,
  stats,
  totalFeedbacks,
  positivePersentage,
}) => {
  return (
    <div>
      {feedbacks.map(feedback => {
        return (
          <Feedback key={feedback}>
            {feedback}: <span>{stats[feedback]}</span>
          </Feedback>
        );
      })}
      <Total>
        Total: <span>{totalFeedbacks}</span>
      </Total>
      <Percentage>
        Positive feedbacks: <span>{positivePersentage}</span>%
      </Percentage>
    </div>
  );
};
