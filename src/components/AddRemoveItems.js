import React, {useState} from 'react';

function AddRemoveItems() {
    const fruits = ['🍇', '🍎', '🍉', '🍈', '🥥', '🥭']; 
  const [cartList, setCartList] = useState([]); 

  function addRandomFruit() {
    const randomFruit = fruits[Math.floor(Math.random() * 4)];
    setCartList([...cartList, randomFruit]);
  }

  function removeFruit() {
    setCartList(cartList.slice(1));
  }

  return (
    <div
      style={{
        margin: '200px auto',
        width: '20%',
        justifyContent: 'space-between',
      }}
    >
      <h1>My cart</h1>
      <button onClick={addRandomFruit}>Add fruit</button>
      <button onClick={removeFruit}>Remove fruit</button>
      <div>
        {cartList.map((fr) => {
          return <div>{fr}</div>;
        })}
      </div>
    </div>
  );
}

export default AddRemoveItems;