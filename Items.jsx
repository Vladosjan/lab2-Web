import React from 'react';

const Items = ({ prod, isChecked, onSel }) => (
  <div style={{ marginTop: '20px' }}>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onSel}
    />
    <span>{prod.name} - ${prod.price}</span>
    <button onClick={onSel}>Select item</button>
  </div>
);

export default Items;
