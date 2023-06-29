import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Todo</h1>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div
                style={{
                  border: "1px solid blue",
                  margin: "10px",
                  padding: "10px",
                }}
                key={todo.id}
              >
                <Link to="/1">상세페이지</Link> <br />
                {todo.id} <br />
                {todo.title} <br />
                {todo.body} <br />
                {todo.isDone.toString()}
                <br />
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제하기
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료하기
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h1>Done</h1>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div
                style={{
                  border: "1px solid blue",
                  margin: "10px",
                  padding: "10px",
                }}
                key={todo.id}
              >
                <Link to={`/${todo.id}`}>상세페이지</Link> <br />
                {todo.id} <br />
                {todo.title} <br />
                {todo.body} <br />
                {todo.isDone.toString()}
                <br />
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제하기
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료하기
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
