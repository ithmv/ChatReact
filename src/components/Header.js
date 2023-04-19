import React, { useState } from 'react';
import Reg from './Reg';

function Header() {
  const [regDisplay, setRegDisplay] = useState('none');

  const handleRegClick = () => {
    setRegDisplay('flex');
  };

  return (
    <div className="Header">
      <h1>Header</h1>
      <section>
        <a id='reg' href='#' onClick={handleRegClick}>Регистрация</a>
      </section>
      <Reg display={regDisplay} setDisplay={setRegDisplay} />
    </div>
  );
}

export default Header;
