import React from "react";
import "./Cate.css";
import NewCategory from './NewCategory';
import DeleteCategory from './DeleteCategory';

const Category = ({category, categories, addCategory}) => {

    return (
        <ul className="category">
            <li>{category.name}</li>
            {
                categories.map((childCategory) => category.id === childCategory.parentId && <Category  key={childCategory.id} addCategory={addCategory} category={childCategory} categories={categories} />)
            }
            <NewCategory addCategory={addCategory} parentId = {category.id} />
            <DeleteCategory id = {category.id} />

        </ul>
    )
}

export default Category;