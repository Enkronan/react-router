import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function subStrAfterChars(str, char)
{
    return str.substring(str.indexOf(char));
}

function Shop() {

    const APP_ID = '4767b429';
    const APP_KEY = 'f2a1a0856ea66ddd0525fd7b405d3ded';

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("chicken");
    

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const items = await data.json();
        setItems(items.hits)
    }

    return (
        <div>
        {items.map(item => (
            <h1 key={item.recipe.uri}>
                <Link to={`/shop/${subStrAfterChars(item.recipe.uri, '#')}`}>{item.recipe.label}</Link>
            </h1>
        ))}
        </div>
    );
}




export default Shop;
