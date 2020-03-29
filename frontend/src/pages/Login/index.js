import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';
import logoImg from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  senha: Yup.string().required('O campo senha é obrigatório')
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, senha }) {
    dispatch(loginRequest(email, senha));
  }

  return (
    <Container>
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="senha" type="password" placeholder="Senha" />
          <button className="button" type="submit">
            {loading ? 'Carregando...' : 'Acessar'}
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#00a8cc" />
            Não tenho cadastro
          </Link>
          <Link className="back-link" to="/login/professor">
            <FiLogIn size={16} color="#00a8cc" />
            Acesso do professor
          </Link>
        </Form>
      </section>
    </Container>
  );
}
