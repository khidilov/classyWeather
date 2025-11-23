import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement = () => {
    this.setState((curr) => {
      return { count: curr.count - 1 };
    });
  };

  handleIncrement() {
    this.setState((curr) => {
      return { count: curr.count + 1 };
    });
  }
  render() {
    const date = new Date("05 february 2000");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{date.toDateString()}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
