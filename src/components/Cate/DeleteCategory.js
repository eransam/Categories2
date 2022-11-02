import "./Cate.css";
import React, { useState } from "react";



const savedArrayJson = localStorage.getItem("categories");
console.log("savedArrayJson: " ,savedArrayJson);

const initialData = savedArrayJson === null ? 
[
    { id: 1,name: "cat1", parentId: null },
    { id: 2,name: "cat2", parentId: null },
    { id: 3,name: "cat3", parentId: null },
    { id: 33,name: "cat33", parentId: 3 }

] : JSON.parse(savedArrayJson);





const DeleteCategory = ({id}) => {



    const [categories, setCategories] = useState([...initialData])
    console.log("categories in first del:" ,categories);


    const removeSecond = () => {
        
        setCategories(current =>
          current.filter(cate => {
            return cate.id !== id;
          }),
        );
        console.log(categories);
        setCategories([...categories]);
        localStorage.setItem('categories', JSON.stringify(categories));

      };






    return (
        <div className="add-category">

            <button onClick={removeSecond}>delete</button>
            
        </div>
    )
}

export default DeleteCategory;