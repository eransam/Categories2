import React, { useState } from "react";
import "./Cate.css";
import Category from './Category';
import NewCategory from './NewCategory';

const savedArrayJson = localStorage.getItem("categories");
console.log("savedArrayJson: " ,savedArrayJson);

const initialData = savedArrayJson === null ? 
[
    { id: 1,name: "cat1", parentId: null },
    { id: 2,name: "cat2", parentId: null },
    { id: 3,name: "cat3", parentId: null },
    { id: 33,name: "cat33", parentId: 3 }

] : JSON.parse(savedArrayJson);




const Categories = () => {
    console.log("un");
    const [categories, setCategories] = useState([...initialData])
    console.log("categories: " ,categories);

    const addCategory = (value, parentId) => {
        const newCategory = {
            id: Math.random(),
            name: value,
            parentId: parentId
        }
        setCategories([newCategory, ...categories]);
        console.log("categories: " ,categories);
        const thecate = JSON.stringify(categories);
        console.log("categorihjcfghfcghes: " );

        console.log("thecate: " ,thecate);
        localStorage.setItem('categories', thecate);

        
    }


    const delCategory = (id) => {

        setCategories(current =>
            current.filter(cate => {
              return cate.id !== id;
            }),
          );

          console.log("categories: " ,categories);
          const thecate = JSON.stringify(categories);
          console.log("categorihjcfghfcghes: " );
  
          console.log("thecate: " ,thecate);
          localStorage.setItem('categories', thecate);
    }




    return (
        <div>
            <h1>Category List</h1>
            <NewCategory addCategory={addCategory} parentId = {null} />
            { categories.map((category) => !category.parentId && <Category key={category.id} addCategory={addCategory} delCategory={delCategory} category={category} categories={categories} />)}
        </div>
    )
}

export default Categories;