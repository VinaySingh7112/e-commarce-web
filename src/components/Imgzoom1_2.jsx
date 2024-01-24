import React, { useState, useEffect } from 'react';

export default function Imgzoom1_2() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?skip=85&limit=8")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div id="products" className="d-flex  card__one1 container-fluid ">
            {products.map((product, index) => (
                <div className="img__elev22" key={index}>
                    {
                        <div className="img__elev22">
                                <span className="background">
                                <a href="" className="button">
                                    <div >
                                        <svg>
                                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                        </svg>
                                            <div className="border p-4 card__parent" style={{width: '230px',height:'350px'}}>
                                                <div className="img__elec3">
                                                    <img className="col-12" id="img__elec2" src={`${product.images[0]}`} width="179px" height="179px"/>
                         
                                                
                                                </div>
                                                <h3 className="border_success w-75"></h3>
                                                <div className=" text_center">
                                                    <div>{product.brand} {product.title} </div>
                                                    <div className="text-danger">$ {product.price}.00</div>
                                                    <h3 className="add_card">Add card</h3>
                                                </div>
                                                <span className=" bi bi-arrow-right-square add_card1 shadow"></span>
                                                <span className=" bi bi-balloon-heart-fill add_card2 shadow"></span>

                                            </div>
                                        
                                        </div>
                                            
                                    </a>

                                </span>
                            </div>}
                </div>
            ))}
        </div>
    );
}





