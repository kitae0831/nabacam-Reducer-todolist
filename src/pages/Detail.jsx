import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const todo = todos.filter((todo) => todo.id === id);

  return (
    <div>
      {todo.id} <br />
      {todo.title} <br />
      {todo.body} <br />
      <br />
      <button onClick={() => navigate("/")}>이전 화면</button>
    </div>
  );
}

export default Detail;
