import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';

export default function NovaQuestao() {
  const [description, setDescription] = useState('');
  const [areas, setAreas] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadAreas() {
      const response = await api.get('areas/disciplinas');

      setAreas(response.data);
    }

    loadAreas();
  }, []);

  function handleNewQuestion(e) {
    e.preventDefault();

    history.push('/profile');
  }

  return (
    <Container>
      <div className="content">
        <section>
          <h1>Enviar nova pergunta</h1>
          <p>Tente descrever a dúvida de maneira clara e objetiva.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewQuestion}>
          <div className="form-group">
            <label for="cars">Disciplina</label>

            <select id="areas">
              {areas.map(area => (
                <option value={area.id}>{area.nome}</option>
              ))}
            </select>
          </div>
          <textarea
            placeholder="Pergunta"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
