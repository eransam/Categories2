import React from "react";
import "./Cate.css";
import NewCategory from './NewCategory';
import DeleteCategory from './DeleteCategory';

const Category = ({category, categories, addCategory ,delCategory}) => {

function changeInputClass() {
    // const theTag = document.getElementsByClassName('NewCategoryDiv');
    document.getElementById("NewCategoryMainDiv").className = "NewCategoryDivVisible";
    // const test34 = document.getElementsByClassName('NewCategoryDivVisible');
    // console.log("test34: " ,test34[0]);
    // test34.className = "NewCategoryDivVisible";
}

    return (
        <ul className="category">
            <li><div className="catName"><div>{category.name}</div><DeleteCategory delCategory = {delCategory}  id = {category.id} /></div></li>
            {
                categories.map((childCategory) => category.id === childCategory.parentId && <Category  key={childCategory.id} addCategory={addCategory} delCategory={delCategory} category={childCategory} categories={categories} />)
            }
           <div id="" className=""><p>Add a Sub category:</p><NewCategory addCategory={addCategory} parentId = {category.id} /></div>
            

        </ul>
    )
}

export default Category;