import { MdDelete } from "react-icons/md";

const Item = ({todoName, todoDate, handleDelete})=>{
    return <div className="row my_row">
    <div className="col-6">
       {todoName}
   </div>
    <div className="col-4">
       {todoDate}
   </div>
   <div className="col-2">
       <button type="button" className="btn btn-danger" onClick={()=>{handleDelete(todoName)}}>
       <MdDelete />
        </button>
   </div>
    </div>
}

export default Item