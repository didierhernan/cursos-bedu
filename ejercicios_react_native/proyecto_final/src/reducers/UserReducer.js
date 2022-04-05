import {TYPES} from '../constants/index';
const INITIAL_STATE = {
  isLoggedIn: false,
  userId: '',
  username: '',
  name: ''
};


export const userReducer = (state = INITIAL_STATE, {payload, type}) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return {...state, ...payload.user,isLoggedIn: true};
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};
