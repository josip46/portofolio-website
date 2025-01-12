import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import favIcon32 from "./assets/bookmarkicon/favicon-32x32.png";
import favIconApple from "./assets/bookmarkicon/apple-touch-icon.png";
import favIcon16 from "./assets/bookmarkicon/favicon-16x16.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <title>Welcome to my website</title>
      <link rel="apple-touch-icon" sizes="180x180" href={favIconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
    </head>
    <App />
  </React.StrictMode>
);
