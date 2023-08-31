import React, { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Your chatbot widget JavaScript code initialization here
    window.__lc = window.__lc || {};
    window.__lc.license = 16007931;
    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          (n.async = !0),
            (n.type = "text/javascript"),
            (n.src = "https://cdn.livechatinc.com/tracking.js"),
            t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
    })(window, document, [].slice);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@livechat/customer-sdk@3.1.2";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src =
      "https://cdn.livechat-static.com/moments-sdk/moments-sdk-1.8.1.umd.min.js";
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  return <div id="chatbot-widget-container"></div>;
};

export default ChatbotWidget;
