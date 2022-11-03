import "./Cate.css";



const DeleteCategory = ({id ,delCategory}) => {

    const removeSecond = () => {
        
        delCategory(id);

      };





    return (
        <div className="add-category">

            <button onClick={removeSecond}>delete</button>
            
        </div>
    )
}

export default DeleteCategory;