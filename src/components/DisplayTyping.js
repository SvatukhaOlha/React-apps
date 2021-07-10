import React, {useState} from 'react';

function DisplayTyping() {
    const [name, setName] = useState('');

    function inputValue(e) {
        setName(e.target.value);
      }
      
      return (
        <div
          style={{
            margin: '200px auto',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
          <h1>Hello, {name}</h1>
          <input
            value={name}
            onChange={inputValue}
            type="text"
            placeholder="change your name"
          />
        </div>
);
}
export default DisplayTyping;