import React, { useEffect } from "react";
import axios from "axios";
import * as CustomerSDK from "@livechat/customer-sdk";

import createMomentsSDK from "@livechat/moments-sdk";

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

      createMomentsSDK({ title: "My App" }).then((momentsSDK) => {
        // your code
        console.log("momentsSDK", momentsSDK);
      });

      apiCall();
    }

    //////////////////////////////////
  }, [props?.formData]);

  // window.onMomentAsyncInit = function (createMomentsSDK) {
  //   createMomentsSDK({ title: "My App" }).then(() => {
  //     // your code
  //   });
  // };

  const apiCall = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer dal:Mn05juPTS3SD3rZL6jwigw",
      "Content-Type": "application/json",
    };

    const dynamicText = `
    Departure: ${props.formData.checkIn}
    Destination: ${props.formData.checkOut}
    Depart: ${props.formData.depart}
    Return: ${props.formData.return}
    Travelers: ${props.formData.travlers}
    Class: ${props.formData.class}
  `;

    let bodyContent = JSON.stringify({
      chat_id: "S0M4X2BY3Y",
      event: {
        type: "message",
        text: dynamicText,
        visibility: "all",
      },
    });

    let reqOptions = {
      url: "https://api.livechatinc.com/v3.5/customer/action/send_event?organization_id=56c74d4d-3103-4419-ad82-f4be821870cb",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    // let response = await axios.request(reqOptions);
    // console.log(response.data);
    try {
      const response = await axios.request(reqOptions);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error("API Error:", error.response.data);
      } else if (error.request) {
        console.error("Request Error:", error.request);
      } else {
        console.error("General Error:", error.message);
      }
    }
  };

  return <div id="chatbot-widget-container"></div>;
};

export default ResultComponent;
