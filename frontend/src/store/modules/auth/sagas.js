import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

import { loginSuccess, signFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, senha } = payload;
    const response = yield call(api.post, 'session', {
      email,
      senha
    });
    const { token, aluno } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(loginSuccess(token, aluno));
    history.push('/profile');
  } catch (err) {
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/LOG_OUT', logOut)
]);
