import Note from "./Note";
import { useState } from "react";
const InsertNotes=()=>{ 
    const [arr,changeArr]=useState([{
        "task":"",
        "desc":""
    }]);
    let y="";
    let z="";
    const task=(event)=>{
        y=event.target.value;
        console.log(y);
    }
    const desc=(event)=>{
        z=event.target.value;
        console.log(z);
    }
    const add=()=>{
        let gh={"task": y, "desc":z};
        changeArr((prev)=>{
            console.log(prev);
        })
        // console.log(arr);
    }
    return (
        <Note/>
    );
}
export default InsertNotes;