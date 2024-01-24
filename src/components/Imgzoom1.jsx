import React, { Component } from 'react';

class Imgzoom1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch("https://dummyjson.com/products?skip=30&limit=9")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ products: data.products });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                <div className="d-flex card__two container-fluid">
                    {products.map((product, index) => (
                        <div key={index}>
                            <span className="background">
                                <a href="#" className="button">
                                    <div>  <svg>
                                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                    </svg>
                                        <div className="container-fluid hello">
                                            <div className="p-3 border img__elec3" style={{ width: '180px', height: '180px', textAlign: 'center' }}>
                                                <img id="img__elec2" src={product.images[2]} width="99px" height="99px" alt="Product" style={{ textAlign: 'center' }} />
                                                <div className="mt-4 text-center">
                                                    <div>{product.brand}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Imgzoom1;
