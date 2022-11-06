import React from "react";
import "./Cate.css";
import NewCategory from './NewCategory';
import DeleteCategory from './DeleteCategory';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Category = ({category, categories, addCategory ,delCategory}) => {
    console.log("category.id: ", category.id.toString()+"1");
    let num =1
function changeInputClass() {
    // const theTag = document.getElementsByClassName('NewCategoryDiv');
    document.getElementById(category.id).className = "NewCategoryDivVisible";
    // const test34 = document.getElementsByClassName('NewCategoryDivVisible');
    // console.log("test34: " ,test34[0]);
    // test34.className = "NewCategoryDivVisible";
}

function openChildren(event) {
    const tar=event.target;
    // tar.innerText = "up";
    const viseOff = "viseOff";
    const vise = "vise";

    if (num%2===0) {
        document.getElementById(category.id.toString()+"1").className = vise;
        num++
    }
    else
    {
    document.getElementById(category.id.toString()+"1").className = viseOff;
    const tar=event.target;
    // tar.innerText = "down";
    num++
    }
}


    return ( 
        <div id="mainNewCategory" >
        <ul className="category">
            
            <li><div className="catName"><div><button onClick={openChildren}> ⇅ </button>{" " +category.name}</div><DeleteCategory delCategory = {delCategory}  id = {category.id} /></div></li>
            <IconButton onClick={changeInputClass} aria-label="delete" size="large" >
            <AddCircleIcon fontSize="inherit" className="AddCircleIcon"/>
            </IconButton> 
            
            <div id={category.id.toString()+"1"} className="vise">
            {
                categories.map((childCategory) => category.id === childCategory.parentId && <Category  key={childCategory.id} addCategory={addCategory} delCategory={delCategory} category={childCategory} categories={categories} />)
            }
           
           <div id={category.id} className="NewCategoryDivHidden"><p>Add a Sub category:</p><NewCategory addCategory={addCategory} parentId = {category.id} /></div>
           </div>

        </ul>
        </div>

    )
}

export default Category;