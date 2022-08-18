import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //inputの中身のステート
  const [todotext, setTodotext] = useState("");

  //未完了のTodoの中身のステート
  const [incompleteTodes, setIncompleteTodes] = useState([]);

  //完了のTodoの中身のステート
  const [completeTodes, setCompleteTodes] = useState([]);

  //inputの中身が変更したときその文字を受け取る
  const onChangeTodotext = (event) => setTodotext(event.target.value);

  const onClickAdd = () => {
    if (todotext === "") return;
    const newTodoes = [...incompleteTodes, todotext];
    setIncompleteTodes(newTodoes);
    //追加が押されたらインプットの仲を消す
    setTodotext("");
  };

  const onClickDelete = (index) => {
    const newtodoes = [...incompleteTodes];
    newtodoes.splice(index, 1); //第一引数にインデックス、第二引数は削除する数
    setIncompleteTodes(newtodoes);
  };

  const onClickComplete = (index) => {
    //未完了から消す処理
    const newIncompletetodoes = [...incompleteTodes];
    newIncompletetodoes.splice(index, 1);
    //完了に追加する処理
    const newCompleteTodoes = [...completeTodes, incompleteTodes[index]];

    setIncompleteTodes(newIncompletetodoes);
    setCompleteTodes(newCompleteTodoes);
  };

  const onClickBack = (index) => {
    //消す処理
    const newCompleteTodes = [...completeTodes];
    newCompleteTodes.splice(index, 1);

    setCompleteTodes(newCompleteTodes);
    //未完了に追加する処理
    const newInInompleteTodoes = [...incompleteTodes, completeTodes[index]];

    setIncompleteTodes(newInInompleteTodoes);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Enter your to do"
          value={todotext}
          onChange={onChangeTodotext}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

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
    </>
  );
};
