import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

const InputField = ({handleAdd})=>{
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleName = (event)=>{
        setName(event.target.value);
    }

    const handleDate = (event)=>{
        setDate(event.target.value);
    }

    const Additem = ()=>{
        handleAdd(name, date);
        setName("");
        setDate("");
    }


    return <div className="container text-center">
        <div className="row my_row">
            <div className="col-6">
                <input type="text" placeholder="Enter your task" value={name} onChange={handleName}/>
            </div>
            <div className="col-4">
                <input type="date" value={date} onChange={handleDate}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success" onClick={Additem}>
                <MdAddToPhotos />
                </button>
            </div>
        </div>
    </div>
}

export default InputField;