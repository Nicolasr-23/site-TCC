import React, { useState } from 'react';


function Perfil() {

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ano, setAno] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [experiencia, setExperiencia] = useState("");

    return (
        <div>
            <h2>Perfil do Estudante</h2>

            <form>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label>Curso:</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)} />
                </div>

                <div>
                    <label>Ano:</label>
                    <input type="text"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)} />
                </div>


                <div>
                    <label>Telefone:</label>
                    <input type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Experiência:</label>
                    <input type="text"
                        value={experiencia}
                        onChange={(e) => setExperiencia(e.target.value)} />
                </div>

            </form>
        </div>
    );
}

export default Perfil