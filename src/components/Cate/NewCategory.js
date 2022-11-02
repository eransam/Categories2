import React, { useState } from "react";
import "./Cate.css";

const NewCategory = ({addCategory, parentId}) => {
    const [value, setValue] = useState("");
    const handleAddCategory = () => {
        addCategory(value, parentId)
        setValue("");
    }
    return (
        <div className="add-category">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleAddCategory}>+</button>
        </div>
    )
}

export default NewCategory;



