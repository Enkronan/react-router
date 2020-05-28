import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Item() {

    const APP_ID = '4767b429';
    const APP_KEY = 'f2a1a0856ea66ddd0525fd7b405d3ded';

    const [item, setItem] = useState([]);
    const [query, setQuery] = useState("chicken");
    

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {}
    
    return (
        <div>
            <h1>Item</h1>
        </div>
    );
}

export default Item;
