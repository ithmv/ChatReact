import React, { useState } from 'react';

function Reg({ display, setDisplay }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setDisplay('none');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <div className="Reg" style={{ display }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
      <div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default Reg;
