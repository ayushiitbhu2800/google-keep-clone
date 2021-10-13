import { useState } from "react";
import Display from "./Display";
import "./style.css";
const Note = () => {
  const [notes, changeNotes] = useState([]);
  let [item, assignItem] = useState({
    task: "",
    desc: "",
    color: "",
  });
  const insert = (event) => {
    const { name, value } = event.target;
    console.log(name);
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
      console.log(item.color);
      assignItem({
        task: "",
        desc: "",
        color: "",
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
        <div Style="margin:20px;">
          <select value={item.color}>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <button type="submit" className="add" onClick={add}></button>
      </div>
      <div className="note">
        <div className="list">
          {notes.map((content, index) => (
            <Display
              key={index}
              heading={content.task}
              desc={content.desc}
              color={content.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Note;
