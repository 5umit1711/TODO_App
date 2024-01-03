import Item from "./Items"

const TodoItems = ({Items, handleDelete})=>{
    return <div className="container text-center">
        {Items.map(item=>(
            <Item key={item} todoName={item.name} todoDate={item.date} handleDelete={handleDelete}/>
        ))}
    </div>
}

export default TodoItems