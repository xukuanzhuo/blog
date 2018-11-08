import React from "react";
import ReactDOM from "react-dom";
import style from './style.css'

const Index = () => {
  return <div className={style.hello}>Hello React!11</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
