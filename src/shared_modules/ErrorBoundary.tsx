import * as React from "react";

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Check console.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
