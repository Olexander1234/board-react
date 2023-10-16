import { Component } from 'react';
import styles from './Clock.module.css';


export class Clock extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
     
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Поточний час: {this.state.time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.stop}>
          Зупитини
        </button>
      </div>
    );
  }
}