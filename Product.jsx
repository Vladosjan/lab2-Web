// src/components/Product.js
import React from 'react';

const Product1 = ({ product1, isChecked1, onChange1 }) => (
  <div>
    <input
      type="checkbox"
      checked={isChecked1}
      onChange1={() => onChange1(product1.id)}
    />
    {product1.name} - ${product1.price}
  </div>
);

export default Product1;
