import * as React from "react";
import {Component} from "react";
import {observer} from "mobx-react";

@observer
class OptionsPage extends Component {
  render() {
    return (
      <div>
        <h1>Options</h1>
        <p>Some options here...</p>
      </div>
    );
  }
}

export default OptionsPage;
