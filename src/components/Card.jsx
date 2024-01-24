import React, { useEffect, useState } from 'react';

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?skip=25&limit=6");
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
    <div id="products5" className="d-flex justify-content-center container-fluid pb-2 " style={{ flexWrap: 'wrap' }}>
      {products.map((v, i) => (
        <div key={i}>
          <span className="background ">
            <a href="#" className="button ">
             
              <div className='card1 m-2'>
                <div className="container-fluid hello ">
                  <div className="p-3 d-flex "id="img__elec5" style={{ width: '371px', height: '160px' }}>
                    <img id="img__elec2" className="col-5 " src={v.images[0]} width="99px" height="129px" />
                    <div className="mt-4 col-7">
                      <div>{v.brand} {v.title} {v.category}</div>
                      <div>${v.price}</div>
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

export default Card;
