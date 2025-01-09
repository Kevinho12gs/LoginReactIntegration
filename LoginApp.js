import React, { useState } from 'react';
import './App.css';

const LoginApp = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      <div className={`container-form ${isLogin ? 'login' : 'register'}`}>        
        {!isLogin ? (
          <>
            <div className="information">
              <div className="info-childs">
                <h2>Bienvenido</h2>
                <p>¿Ya tienes una cuenta? No esperes más, ¡Adelante!</p>
                <button id="sign-in" onClick={toggleForm}>Iniciar Sesión</button>
              </div>
            </div>
            <div className="form-information">
              <div className="form-information-childs">
                <h2>Crea una cuenta</h2>
                <div className="icons">
                  <i className='bx bxl-google'></i>
                  <i className='bx bxl-facebook-circle'></i>
                  <i className='bx bxl-apple'></i>
                </div>
                <p>O también puedes usar tu correo electrónico para registrarte</p>
                <form className="form">
                  <label>
                    <i className='bx bx-user'></i>
                    <input type="text" placeholder="Nombres Completos" />
                  </label>
                  <label>
                    <i className='bx bx-envelope'></i>
                    <input type="email" placeholder="Correo Electrónico" />
                  </label>
                  <label>
                    <i className='bx bx-lock-alt'></i>
                    <input type="password" placeholder="Contraseña" />
                  </label>
                  <label>
                    <i className='bx bx-lock-alt'></i>
                    <input type="password" placeholder="Confirmar Contraseña" />
                  </label>
                  <button type="submit">Regístrate</button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="information">
              <div className="info-childs">
                <h2>¡Qué felicidad tenerte de nuevo por aquí!</h2>
                <p>¿Qué esperas para unirte a la mejor comunidad de sneakers? ¡Regístrate ahora!</p>
                <button id="sign-up" onClick={toggleForm}>Regístrate</button>
              </div>
            </div>
            <div className="form-information">
              <div className="form-information-childs">
                <h2>Iniciar Sesión</h2>
                <div className="icons">
                  <i className='bx bxl-google'></i>
                  <i className='bx bxl-facebook-circle'></i>
                  <i className='bx bxl-apple'></i>
                </div>
                <p>O inicia sesión con una cuenta</p>
                <form className="form">
                  <label>
                    <i className='bx bx-envelope'></i>
                    <input type="email" placeholder="Correo Electrónico" />
                  </label>
                  <label>
                    <i className='bx bx-lock-alt'></i>
                    <input type="password" placeholder="Contraseña" />
                  </label>
                  <button type="submit">Iniciar Sesión</button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginApp;
