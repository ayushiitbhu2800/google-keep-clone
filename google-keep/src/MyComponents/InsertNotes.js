
const InsertNotes=()=>{ 
    return (
        <div className="logo insert">
            <textarea id="heading" placeholder="Task"/>
            <br/>
            <textarea id="desc" placeholder="Description"/>
            <br/>
            <button type="submit" className="add">Add</button>
        </div>
    );
}
export default InsertNotes;