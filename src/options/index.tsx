import * as ReactDOM from "react-dom";
import * as React from "react";
import "./style.scss";
import ErrorBoundary from "../shared_modules/ErrorBoundary";
import OptionsPage from "./OptionsPage";

const initialPopupComponent = (
  <ErrorBoundary>
    <OptionsPage/>
  </ErrorBoundary>
);

ReactDOM.render(initialPopupComponent, document.getElementById('popup-root'));
