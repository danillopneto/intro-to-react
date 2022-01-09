import React, {useState} from "react";
import './SearchBar.css';

import MaterialLabel from '../MaterialLabel/MaterialLabel';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <MaterialLabel searchValue={searchValue} handleInputChange={handleInputChange} />
            
            <div className="products-container">
                {props.source.filter((p) => {
                    return p.title.toLowerCase().includes(searchValue.toLowerCase());
                }).map((p) => {
                    return (
                        <div key={p.id} className="product-container">
                            <img src={p.image} alt={p.id} className="product-image" />
                            <div className="product-details">                            
                                <label className="product-title">{p.title}</label>
                                <label className="product-price"><b>U$ {p.price.toFixed(2)}</b></label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchBar;