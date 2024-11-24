import React, { useState } from 'react';
import './App.css';

const VegetableList = () => {
  const [vegetables, setVegetables] = useState([
    { id: 1, name: 'Pomidor', purchased: false },
    { id: 2, name: 'Kartoshka', purchased: false },
    { id: 3, name: 'Sabzi', purchased: false },
  ]);

  const [newVegetable, setNewVegetable] = useState('');

  const handleAddVegetable = () => {
    if (newVegetable) {
      const newItem = {
        id: vegetables.length + 1,
        name: newVegetable,
        purchased: false,
      };
      setVegetables([...vegetables, newItem]);
      setNewVegetable('');
    }
  };

  const handleRemoveVegetable = (id) => {
    setVegetables(vegetables.filter((item) => item.id !== id));
  };

  const handleChecked = (id) => {
    setVegetables(
      vegetables.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  return (
    <div className="container">
      <h2 className="title">Sabzavotlar Ro'yxati</h2>
      <div className="input-container">
        <input
          type="text"
          value={newVegetable}
          onChange={(e) => setNewVegetable(e.target.value)}
          className="input"
          placeholder="Yangi sabzavot kiriting"
        />
        <button onClick={handleAddVegetable} className="add-button">+</button>
      </div>
      <ul className="list">
        {vegetables.map((vegetable) => (
          <li key={vegetable.id} className={`list-item ${vegetable.purchased ? 'purchased' : ''}`}>
            <input
              type="checkbox"
              checked={vegetable.purchased}
              onChange={() => handleChecked(vegetable.id)}
              className="checkbox"
            />
            {vegetable.name}
            <button onClick={() => handleRemoveVegetable(vegetable.id)} className="remove-button">-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetableList;
