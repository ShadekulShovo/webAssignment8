import React from "react";

const QA = () => {
  return (
    <div>
      <div>
        <h3>How React Works?</h3>
        <p>
          React.js is a popular JavaScript web framework. A key technology,
          React, like Angular and more recently Vue, has influenced how we
          create web apps. Using React allows you to embed JavaScript in your
          HTML code. Using React's Element method, users may create DOM node
          representations. As you may have observed, the HTML code above has an
          XML-like syntax. However, React uses className instead of the DOM
          class. JSX tags include names, children, and attributes. CURLY
          BRACKETS ARE REQUIRED FOR NUMER Like JavaScript, JSX attributes
          represent strings with quotes. Instead of JavaScript, most React code
          is written in JSX.
        </p>

        <h3>How useState Works?</h3>
        <p>
          useState adds state to function components. In a function component,
          invoking React.useState creates a single piece of state. Class
          components' state was always an object that might have numerous
          values. With hooks, the state may be any type. UseState with an array,
          an object, an integer, a boolean, or a string. Any sort of value may
          be stored in a useState call. The useState hook is useful for tiny
          amounts of local component state. Using useState alongside other state
          management solutions is recommended for bigger apps or apps that will
          be scaled.
        </p>
      </div>
    </div>
  );
};

export default QA;
