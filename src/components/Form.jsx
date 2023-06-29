import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          dispatch({
            type: "ADD_TODO",
            payload: {
              id: shortid.generate(),
              title: title,
              body: body,
              isDone: false,
            },
          });

          setTitle("");
          setBody("");
        }}
      >
        <div>
          <p>제목</p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <p>내용</p>
          <input
            type="text"
            name="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </div>
        <button>추가하기</button>
      </form>
    </div>
  );
}

export default Form;
