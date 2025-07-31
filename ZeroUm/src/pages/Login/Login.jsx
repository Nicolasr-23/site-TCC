import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de usuário:
          <select value={tipo} onChange={e => setTipo(e.target.value)}>
            <option value="estudante">Estudante</option>
            <option value="administrador">Administrador</option>
            <option value="empresa">Empresa</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;