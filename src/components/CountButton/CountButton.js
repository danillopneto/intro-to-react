import React, { useState, useEffect } from "react";
import './CountButton.css';

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + (props.incrementBy ?? 1));
    };

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <button onClick={handleClick}>+{(props.incrementBy ?? 1)}</button>
            <div className="count-display">{currentCount}º</div>
        </div>
    )
};

export default CountButton;