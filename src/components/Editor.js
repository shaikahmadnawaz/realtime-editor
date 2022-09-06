import React, { useEffect } from "react";
import Codemirror from "codemirror";
/* To enable theme we have import this css file
which is present in node modules */
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
/* To enable mode we have import this javascript file
which is present in node modules */
const Editor = () => {
  // initializing code editor
  useEffect(() => {
    async function init() {
      Codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);
  // we connect code mirror with our text area so that
  //it will convert ta in fully featured editor
  return <textarea id="realtimeEditor">Editor</textarea>;
};

export default Editor;
