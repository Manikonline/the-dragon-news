import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  './LeftNav.css'


const LeftNav = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data =>setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`} className="category-text">{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;