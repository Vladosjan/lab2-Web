import React, { useState } from 'react';
import Items from './Items'; // Імпорт компонента Items

const Production = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (id) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((productId) => productId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const selectedProductDetails = products.filter(product => selectedProducts.includes(product.id));

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Items
          key={product.id}
          prod={product}
          isChecked={selectedProducts.includes(product.id)}
          onSel={() => handleSelect(product.id)}
        />
      ))}

      <h3>Selected Products</h3>
      {selectedProductDetails.id === 0 ? (
        <p>No products selected.</p>
      ) : (
        <ul>
          {selectedProductDetails.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Production;
