const Note=()=>{ 
    return (
        <div className="logo insert">
            <textarea id="heading" placeholder="Task" onChange={task}/>
            <br/>
            <textarea id="desc" placeholder="Description" onChange={desc}/>
            <br/>
            <button type="submit" className="add" onClick={add}>Add</button>
        </div>
    );
}
export default Note;