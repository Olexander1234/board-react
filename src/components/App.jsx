import '../index.css';
import { Component } from 'react';
import { FeedbackOptions } from './FeedBack/FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './event/MyEvent.style';
import { Statistics } from './FeedBack/Statistics/Statistics';
import { ColorChange } from './ColorChanger/ColorChanger';
import ColorPicker from './ColorPicker/ColorPicker';
import { TodoList } from './Todo/TodoList';
import todo from './Todo/todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlClick = (vote) => {
    switch (vote) {
      case 'good':
        this.setState((prevState) => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState((prevState) => ({ bad: prevState.bad + 1 }));
        break;
      default:
        return;
    }
  };

  calculatePositivePercentage = () => {
    const { good } = this.state;
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const countTotal = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = this.calculatePositivePercentage();

    return (
      <>
        <GlobalStyle />
        <ColorChange />
        <ColorPicker options={colorPickerOptions} />
        <TodoList todos={todo} />

        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handlClick} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotal}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}