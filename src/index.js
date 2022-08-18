import React from "react";
import ReactDom from "react-dom";

import { App } from "./App";

//index.htmlのrootの場所に、<App>を埋め込む　<App>にはコンポーネントが埋め込まれる、
ReactDom.render(<App />, document.getElementById("root"));
