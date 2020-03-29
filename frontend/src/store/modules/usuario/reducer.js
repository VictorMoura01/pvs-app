import produce from 'immer';
const INITIAL_STATE = {
  profile: null
};
export default function usuario(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        draft.profile = action.payload.aluno;
        break;
      }
      case '@auth/LOG_OUT':
        draft.profile = null;
        break;
      default:
        return state;
    }
  });
}
