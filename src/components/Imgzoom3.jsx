import React, { useEffect, useState } from 'react';

const Imgzoom3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?skip=45&limit=6");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="products5" className="d-flex card__one1 container-fluid pb-2 pt-2" style={{ flexWrap: 'wrap' }}>
      {products.map((v, i) => (
        <div key={i}>
          <span className="background">
            <a href="#" className="button">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              <div>
                <div className="container-fluid hello">
                  <div className="p-3 d-flex border img__elec3" style={{ width: '328px', height: '160px' }}>
                    <img id="img__elec2" className="col-5" src={v.images[0]} width="99px" height="119px" />
                    <div className="mt-4 col-7">
                      <div>{v.brand} {v.title} {v.category}</div>
                      <div className='text-danger font-weight-bold'>${v.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Imgzoom3;
