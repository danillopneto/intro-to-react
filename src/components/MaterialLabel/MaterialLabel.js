import React from "react";
import './MaterialLabel.css';

const MaterialLabel = (props) => {
    return (
        <div className="material-input-container">
            <input 
                id="search"
                type="search" 
                value={props.searchValue} 
                onChange={props.handleInputChange}
                className="material-input"
                required />
            <label className="material-label" htmlFor="search">Search</label>
        </div>
    );
};

export default MaterialLabel;