// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import './App.css';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function App() {
  const [items, setItems] = useState(['Pursuit of Happiness', 'Shawshank Redemption', 'Mankatha']);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };


  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/additem" element={
          <div className="app">
            <h1>My Movie Collection</h1>
            <ItemList items={items} className="item-list" />
            <AddItemForm onAdd={addItem} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
