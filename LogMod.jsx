// src/components/LogMod.js
import React from 'react';

const LoginModal = ({ onClose, onLogin }) => (
  <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
      <h2>Login</h2>
      {/* You can add form fields here */}
      <button onClick={onLogin}>Login</button>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default LoginModal;
