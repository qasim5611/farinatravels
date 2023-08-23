import React, { useEffect } from "react";

const ResultComponent = (props) => {
  console.log("formData", props);
  useEffect(() => {
    if (props?.formData) {
      LiveChatWidget.call("update_session_variables", {
        checkIn: props.formData.checkIn,
        checkOut: props.formData.checkOut,
        class: props.formData.class,
        depart: props.formData.depart,
        return: props.formData.return,
        travlers: props.formData.travlers,
        tripDetail: props.formData.tripDetail,
        checkOut: props.formData.checkOut,
        class: props.formData.class,
      });
    }
  }, [props?.formData]);

  return <div id="chatbot-widget-container"></div>;
};

export default ResultComponent;
