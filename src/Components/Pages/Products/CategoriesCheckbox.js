import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../api/categoryAPI";

const CategoriesCheckbox = ({handleCategory}) => {
  const [categories, setCategories] = useState("");
  // load garna lai useEffect use garchau
  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  }, []);

  const [ checked, setChecked ] = useState([])

  const handleChange = e => {
    let new_checked = [...checked]
    let new_category = e.target.value
    let itemExists = new_checked.findIndex(item=>item === new_category)
    /*returns index if already in checked array, returns -1 if not there */
    if(itemExists === -1){
      new_checked.push(new_category)
    }
    else{
      new_checked.splice(itemExists,1)
    }
    setChecked(new_checked)
    handleCategory(new_checked, 'category')
  }
  return (
    <div>
      {categories &&
        categories.map((cate, i) => {
          return (
            <div key={i}>
            <input 
              type="checkbox" 
              id={cate.category_name} 
              onChange={handleChange} 
              value={cate._id}/>
            <label htmlFor={cate.category_name}>{cate.category_name}</label>
            </div>
            );
          })}
    </div>
  );
};

export default CategoriesCheckbox;
