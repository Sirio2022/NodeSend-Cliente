import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axiosInstance from '../../config/axios';

import { USUARIO_AUTENTICADO } from '../../types';

const AuthState = ({ children }) => {
  // Definir un state inicial
  const initialState = {
    token: '',
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  // Definir el reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Registrar nuevos usuarios
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await axiosInstance.post('/api/usuarios', datos);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  // Usuario autenticado
    const usuarioAutenticado = (nombre) => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre,
        });
    };

  return <AuthContext.Provider value={{
    token: state.token,
    autenticado: state.autenticado,
    usuario: state.usuario,
    mensaje: state.mensaje,
    registrarUsuario,
    usuarioAutenticado,
  }}>{children}</AuthContext.Provider>;
};

export default AuthState;
