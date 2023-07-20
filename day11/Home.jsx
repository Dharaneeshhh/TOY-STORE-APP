import React from 'react';
import './home.css';

const toysData = [
  { id: 1, name: 'Teddy Bear', price: 10 },
  { id: 2, name: 'Toy Car', price: 15 },
  { id: 3, name: 'Doll', price: 20 },
  { id: 4, name: 'Building Blocks', price: 25 },
];

const Home = () => {
  return (
    <div className="App">
      <h1>Toy Store</h1>
      <ul>
        {toysData.map(toy => (
          <li key={toy.id}>
            <span className="toy-name">{toy.name}</span>
            <span className="toy-price">${toy.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
