import React from 'react';
import { desserts } from './index'; 

const DessertsList = () => {
  return (
    <div>
      <h1>Dessert Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {desserts.map((dessert) => (
          <div key={dessert.id} style={{ border: '1px solid #ddd', padding: '10px', width: '250px' }}>
            <img src={dessert.img} alt={dessert.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{dessert.name}</h2>
            <p>{dessert.dsc}</p>
            <p><b>Price:</b> ${dessert.price}</p>
            <p><b>Rating:</b> {dessert.rate} / 5</p>
            <p><i>{dessert.country}</i></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsList;