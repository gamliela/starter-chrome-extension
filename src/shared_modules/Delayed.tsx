import * as React from "react";

type DelayedProps = {
  delay: number
}

type DelayedState = {
  shown: boolean
}

class Delayed extends React.Component<DelayedProps, DelayedState> {
  constructor(props) {
    super(props);
    this.state = {shown: false};
  }

  componentDidMount() {
    setTimeout(() => this.setState({shown: true}), this.props.delay);
  }

  render() {
    return this.state.shown && this.props.children;
  }
}

export default Delayed;
