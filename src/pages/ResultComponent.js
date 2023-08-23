import React, { useEffect } from "react";

const ResultComponent = (props) => {
  console.log("formData", props);
  useEffect(() => {
    if (props?.formData) {
      LiveChatWidget.call("update_session_variables", {
        Departure: props.formData.checkIn,
        Destination: props.formData.checkOut,
        depart: props.formData.depart,
        return: props.formData.return,
        travlers: props.formData.travlers,
        class: props.formData.class,
      });
    }
  }, [props?.formData]);

  return <div id="chatbot-widget-container"></div>;
};

export default ResultComponent;
