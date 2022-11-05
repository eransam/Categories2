import React, { useState } from "react";
import "./Cate.css";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';

const NewCategory = ({addCategory, parentId}) => {
    const [value, setValue] = useState("");
    const handleAddCategory = () => {
        addCategory(value, parentId)
        setValue("");
    }
    return (
        <div className="add-category">
            <TextField
            label="Add"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/> */}
            <IconButton onClick={handleAddCategory} aria-label="delete" size="large" >
            <AddCircleIcon fontSize="inherit" />
            </IconButton>     

        </div>
    )
}

export default NewCategory;



