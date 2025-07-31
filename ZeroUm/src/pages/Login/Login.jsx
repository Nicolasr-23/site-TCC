import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS for styling

function Login() {
  const [tipo, setTipo] = useState('estudante');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('usuarioLogado', JSON.stringify({ tipo, email }));
    navigate('/');
  }

  return (
  <div className="page-container">
    <div>
      <h2 className="title">Login</h2>
      <p className="subtitle message">Faça login para acessar sua conta</p>
      <form className="form" onSubmit={handleSubmit}>

        <label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            placeholder=" "
            required
          />
          <span>Senha</span>
        </label>

          <label>
          <select
            className="input"
            value={tipo}
            onChange={e => setTipo(e.target.value)}
            required
          >
            <option value="estudante">Estudante</option>
            <option value="administrador">Administrador</option>
            <option value="empresa">Empresa</option>
          </select>
          <span>Tipo de usuário</span>
        </label>

        <button type="submit" className="submit">Entrar</button>
      </form>
    </div>
  </div>
  );
}

export default Login;
