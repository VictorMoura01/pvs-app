export function loginRequest(email, senha) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, senha }
  };
}

export function loginSuccess(token, aluno) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, aluno }
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}

export function logOut() {
  return {
    type: '@auth/LOG_OUT'
  };
}
