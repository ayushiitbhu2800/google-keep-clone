import { useState } from "react";
import Display from "./Display";
import "./style.css";
const Note = () => {
  const [notes, changeNotes] = useState([]);
  let [item, assignItem] = useState({
    task: "",
    desc: "",
  });
  const insert = (event) => {
    const { name, value } = event.target;
    assignItem((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const add = () => {
    if (item.task === "" || item.desc === "") {
      alert("Invalid");
    } else {
      changeNotes((prev) => {
        return [...prev, item];
      });
      assignItem({
        task: "",
        desc: "",
      });
    }
  };
  return (
    <>
      <div className="logo insert">
        <textarea
          id="heading"
          name="task"
          value={item.task}
          placeholder="Task"
          onChange={insert}
        />
        <br />
        <textarea
          id="desc"
          name="desc"
          value={item.desc}
          placeholder="Description"
          onChange={insert}
        />
        <br />
        <button type="submit" className="add" onClick={add}>
          Add
        </button>
      </div>
      <div>
        {notes.map((content, index) => (
          <Display key={index} heading={content.task} desc={content.desc} />
        ))}
      </div>
    </>
  );
};
export default Note;
