import * as ReactDOM from "react-dom";
import * as React from "react";
import "./style.scss";
import ErrorBoundary from "../shared_modules/ErrorBoundary";
import Delayed from "../shared_modules/Delayed";
import PopupPageModel from "./PopupPageModel";
import PopupPage from "./PopupPage";

const initialPopupPageModel = new PopupPageModel();

const initialPopupComponent = (
  <ErrorBoundary>
    {
      // workaround for Mac problem, when popup get a wrong size
      // https://bugs.chromium.org/p/chromium/issues/detail?id=428044
    }
    <Delayed delay={10}>
      <PopupPage model={initialPopupPageModel}/>
    </Delayed>
  </ErrorBoundary>
);

ReactDOM.render(initialPopupComponent, document.getElementById('popup-root'));
