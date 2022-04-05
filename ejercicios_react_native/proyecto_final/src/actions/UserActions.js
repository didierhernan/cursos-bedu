// import {UserController} from '@/controllers';
import { useNavigation } from '@react-navigation/native';
import {TYPES} from '../constants/types';



const loginRequest = emailUser => ({
  type: TYPES.LOGIN_REQUEST,
  payload: {emailUser},
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: {user},
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: {error},
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

function login(emailUser, passwordUser){

    return async (dispatch) => { 
      return fetch("api/users/authenticate", {
        method: 'POST',
        body: JSON.stringify({emailUser,passwordUser})
      })
        .then((response) => response.json())
        .then((json) => {
          if (json != null) { 
            console.log('Acceso permitido')
            dispatch(loginSuccess(json.user))
          } else {
            console.log('Acceso denegado')
            dispatch(loginError('Credenciales inválidas'))
          }
        })
        .catch((err) => {
          dispatch(loginError(err.toString()))
        }); 
    };
}

export const logout =
  () =>
  async (dispatch) => {
    try {
      console.log("borrando")
      dispatch(clearStore());
    } catch(err) {
      console.log(err)
    }
  };

export const userActions = {
  login,
  logout
}
