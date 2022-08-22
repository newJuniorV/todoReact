import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { Incomplete } from "./components/incomplete";
import { Complete } from "./components/complete";

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
      <InputTodo
        todotext={todotext}
        onChange={onChangeTodotext}
        onClick={onClickAdd}
        disabled={incompleteTodes.length >= 5}
      />
      {incompleteTodes.length >= 5 && (
        <p style={{ color: "red" }}>登録は5つまでです</p>
      )}
      {/*「/」忘れがち */}

      <Incomplete
        incompleteTodes={incompleteTodes}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <Complete completeTodes={completeTodes} onClickBack={onClickBack} />
    </>
  );
};
