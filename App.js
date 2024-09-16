import React, { useState } from "react";
import People from './components/people';   // Will be used in the header
import BohzaAlexei from './components/Bohza';  // Will be part of the body
import Car from './components/Car';   // Part of the main content
import Home from './components/Home';  // Will be the footer
import AirBus from './components/AirBus';  // Optional additional body content
import LoginButton from "./components/LoginComp"; 
import LogoutButton from "./components/LogOut"; 
import LoginModal from "./components/LogMod";
import Production from './components/Production'; // Import Production

function App() {  
  const [isLoggedIn, setLoggedIn] = useState(false);  
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => { 
    setLoggedIn(true);
    setShowLoginModal(false);
  }; 

  const handleLogout = () => { 
    setLoggedIn(false);
  }; 

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };
  
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const productions = [ 
    { id: 1, name: "Shtang", price: 10000 }, 
    { id: 2, name: "Gantels", price: 5000 },
    { id: 3, name: "Weight", price: 20000 }, 
    { id: 4, name: "Expander", price: 7000 }
  ];

  return ( 
    <div className="App">
      {/* Header Section */}
      <header style={{ backgroundColor: "blue", padding: "20px" }}>
        <h1>Website Header</h1>
        <People />

        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          {!isLoggedIn ? (
            <LoginButton onClick={handleShowLoginModal} />
          ) : (
            <LogoutButton onClick={handleLogout} />
          )}
        </div>
      </header>

      {showLoginModal && (
        <LoginModal onClose={handleCloseLoginModal} onLogin={handleLogin} />
      )}

      {/* Navigation Menu */}
      <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
        <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
          <li><a href="#home" style={{ color: "white" }}>Home</a></li>
          <li><a href="#about" style={{ color: "white" }}>About</a></li>
          <li><a href="#contact" style={{ color: "white" }}>Contact</a></li>
        </ul>
      </nav>

      <main style={{ padding: "20px", backgroundColor: "yellow" }}>
        <Production products={productions} />
        <BohzaAlexei />
        <Car />
        <AirBus />
      </main>

      <footer style={{ backgroundColor: "green", padding: "20px", marginTop: "0px" }}>
        <Home />
      </footer>
    </div>
  );
}

export default App;
