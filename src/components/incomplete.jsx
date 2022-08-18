import React from "react";

export const Incomplete = (props) => {
  const { incompleteTodes, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {incompleteTodes.map((todo, index) => {
          return (
            // {/*to do と、2つのボタンを横並びにするためにdivで囲みCSSで調整 */}
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
