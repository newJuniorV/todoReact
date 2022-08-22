import React from "react";

export const Complete = (props) => {
  const { completeTodes, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {completeTodes.map((todo, index) => {
          return (
            //{/*to do と、1つのボタンを横並びにするためにdivで囲みCSSで調整 */}
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻る</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
