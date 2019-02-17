import * as React from "react";
import {Component} from "react";
import {observer} from "mobx-react";
import PopupPageModel from "./PopupPageModel";

type PopupPageProps = {
  model: PopupPageModel
}

@observer
class PopupPage extends Component<PopupPageProps> {
  render() {
    return (
      <div>
        <h1>Popup</h1>
        <p>Some stuff here...</p>
      </div>
    );
  }
}

export default PopupPage;
