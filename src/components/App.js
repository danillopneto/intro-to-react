import React, {useState, useEffect} from "react";

import SearchBar from "./SearchBar/SearchBar";

const App = () => {
    
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res =>res.json())
            .then((json) => {
                setProductsState(json);
            });
    }, []);
    
    const hasProducts = productsState.length > 0;

    return (
        <div>
            {hasProducts ?  <SearchBar source={productsState} /> : 'Loading...'}            
        </div>
    )
};

export default App;