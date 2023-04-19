import '../styles/style.css';
function Reg() {
  return (
    <div className="Reg">
      <input type='text' placeholder='Имя' />
      <input type='email' placeholder='Электронная почта' />
      <input type='password' placeholder='Пароль' />
      <button>Зарегистрироваться</button>
      <button>Закрыть</button>
    </div>
  );
}

export default Reg;
