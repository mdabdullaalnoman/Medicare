import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import './Shop.css';

const Shop = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

            .catch((error) => console.log(error))
    }, []);

    return (
        <div>
            <Navbar />
            <div className="products-warp">
                {
                    product.map(pd =>
                        <div key={pd.id}>
                            <div className="singleProduct">
                                <div className="product"></div>
                                <p>{pd.tittle}</p>
                                <h1>{pd.price} $</h1>
                                <div className="buy-now">
                                <button>Buy now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Shop;