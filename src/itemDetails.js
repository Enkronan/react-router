import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({ match }) {

    const APP_ID = '4767b429';
    const APP_KEY = 'f2a1a0856ea66ddd0525fd7b405d3ded';

    const [item, setItem] = useState([]);
    const [query, setQuery] = useState("http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408");
    

    useEffect(() => {
        fetchItem();
        console.log(match.params.uri);
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://api.edamam.com/search?r=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const items = await data.json();
    }
    
    return (
        <div>
            <h1>Item</h1>
        </div>
    );
}

export default ItemDetail;
