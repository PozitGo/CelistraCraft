import React from "react";
import ReactDOM from "react-dom";
import Notification from "./Notification";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Notification title={props.title} description={props.description} />,
        document.getElementById("root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
