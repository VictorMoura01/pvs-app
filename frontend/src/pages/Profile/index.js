import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { logOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const [questao, setQuestao] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get('questoes');

      setQuestao(response.data);
    }

    loadQuestions();
  }, []);

  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo, Victor</span>

        <Link to="/questoes/cadastrar" className="button">
          Nova pergunta
        </Link>
        <button onClick={handleLogOut} type="button">
          <FiPower size={18} color="#204051" />
        </button>
      </header>
      <h1>Perguntas</h1>
      {/* Mostrar apenas respondidas <input type="checkbox" checked /> */}
      <ul>
        {questao.map(questao => (
          <li key={questao.id}>
            <strong>Disciplina:</strong>
            <p>Nome Da Disciplina</p>

            <strong>Pergunta:</strong>
            <p>{questao.conteudo}</p>

            <strong>Resposta:</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
              lacus a est lobortis facilisis. Nullam magna lectus, fermentum
              quis rhoncus eleifend, laoreet non leo.
            </p>

            <button onClick={() => {}} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
